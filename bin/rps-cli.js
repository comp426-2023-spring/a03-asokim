#!/usr/bin/env node

import minimist from 'minimist';
import { playRps } from '../lib/rpsls.js';

const args = minimist(process.argv.slice(2));