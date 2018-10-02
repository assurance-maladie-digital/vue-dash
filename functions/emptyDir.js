const fs = require('extfs');

const emptyDir = (dirPath) => {
	let files = [];

	try {
		files = fs.readdirSync(dirPath);
	} catch(e) {
		return;
	}

	if (files.length > 0) {
		for (let i = 0; i < files.length; i++) {
			let filePath = `${dirPath}/${files[i]}`;

			if (fs.existsSync(filePath)) {
				if (fs.statSync(filePath).isFile()) {
					fs.unlinkSync(filePath);
				} else {
					emptyDir(filePath);
				}
			}
		}
	}

	if (dirPath !== process.cwd() && fs.lstatSync(dirPath).isDirectory()) {
		fs.removeSync(dirPath, () => {});
	}
};

module.exports = emptyDir;
