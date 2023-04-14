#!/usr/bin/env node

import minimist from 'minimist';
import { rpsls } from '../lib/rpsls.js';

const args = minimist(process.argv.slice(2));



if (args.h || args.help) {
    help();
}