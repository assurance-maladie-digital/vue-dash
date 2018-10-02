#!/usr/bin/env node

require('yargs')
	.commandDir('cmds')
	.demandCommand()
	.help()
	.option('verbose', {
		alias: 'v',
		default: false
	})
	.argv;
