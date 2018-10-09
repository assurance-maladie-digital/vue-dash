const CMD = require('node-cmd');

const cmd = (command: string, cb: (data: any) => void) => {
	const processRef = CMD.get(command);

	processRef.stdout.on(
		'data',
		(data: any) => cb(data)
	);
};

export default cmd;
