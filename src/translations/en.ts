// tslint:disable:max-line-length

const en = {
	verbose: 'Show more details of what is happening',
	usage: 'Usage: vue-dash create [name]',
	epilogue: 'For more informations, see https://github.com/assurance-maladie-digital/vue-dash',
	cmds: {
		create: {
			description: `🎉 Create and configure the application`,
			name: {
				description: 'Name of the application'
			}
		},
		serve: {
			description: `🎮 Launch development server`,
			open: {
				description: 'Open browser on server start'
			}
		}
	},
	functions: {
		create: {
			question: {
				message: 'Overwrite the content of the current folder',
				choices: {
					overwrite: 'Overwrite',
					cancel: 'Cancel'
				}
			}
		}
	}
};

export default en;
