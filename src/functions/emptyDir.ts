import fs from 'extfs';

const emptyDir = (dirPath: string) => {
	let files = [];

	try {
		files = fs.readdirSync(dirPath);
	} catch (error) {
		//
		return;
	}

	if (files.length > 0) {
		for (const i of files) {
			const filePath = `${dirPath}/${files[i]}`;

			if (fs.existsSync(filePath)) {
				if (fs.statSync(filePath).isFile()) {
					fs.unlinkSync(filePath);
				} else {
					emptyDir(filePath);
				}
			}
		}
	}

	if (
		dirPath !== process.cwd() &&
		fs.lstatSync(dirPath).isDirectory()
	) {
		fs.removeSync(dirPath, () => {
			//
		});
	}
};

export default emptyDir;
