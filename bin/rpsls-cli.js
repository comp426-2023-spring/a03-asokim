#!/usr/bin/env node

import minimist from 'minimist';
import { playRpsls } from '../lib/rpsls.js';

const args = minimist(process.argv.slice(2));