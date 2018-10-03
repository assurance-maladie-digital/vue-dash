#!/usr/bin/env node

// tslint:disable-next-line:no-var-requires
require('module-alias/register');

import * as moduleAlias from 'module-alias';

moduleAlias.addAlias('@', () => {
	return __dirname;
});

import * as yargs from 'yargs';

// tslint:disable no-unused-expression
yargs
.commandDir('cmds')
.demandCommand()
.help()
.options('verbose', {
	description: 'Show more details of what is happening',
	default: false
})
.alias('v', 'version')
.argv;
