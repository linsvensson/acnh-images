#!/usr/bin/env node

import { program } from 'commander';
const { description, name, version } = require('../package.json');

import { main } from './download';

// Set the program's name and description.
program.name(name).description(description);

// Ccommander sets the flag for as '-V', so we manually change it to '-v'.
program.version(version, '-v, --version', 'prints the current version');

// Represents how to download each image as.
program.option('-f, --newVersion <string>');

// Parse given command line arguments.
program.parse(process.argv);

main(program.newVersion);
