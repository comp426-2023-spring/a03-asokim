#!/usr/bin/env node

import minimist from 'minimist';
import { Rpsls } from '../lib/rpsls.js';

const args = minimist(process.argv.slice(2));