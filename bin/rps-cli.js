#!/usr/bin/env node

import minimist from 'minimist';
import { Rps } from '../lib/rpsls.js';

const args = minimist(process.argv.slice(2));