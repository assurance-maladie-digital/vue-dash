#!/usr/bin/env node

// tslint:disable-next-line:no-var-requires
require('module-alias/register');


import * as moduleAlias from 'module-alias';

moduleAlias.addAlias('@', () => {
	return __dirname;
});

import trad from '@/translations';
import * as yargs from 'yargs';

// tslint:disable no-unused-expression
yargs
.usage(trad('usage'))
.commandDir('cmds')
.demandCommand()
.alias('v', 'version')
.alias('h', 'help')
.help()
.options('verbose', {
	description: trad('verbose'),
	default: false,
})
.epilogue(trad('epilogue'))
.argv;
