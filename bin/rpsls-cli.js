#!/usr/bin/env node

import minimist from 'minimist';
import { rpsls } from '../lib/rpsls.js';

const args = minimist(process.argv.slice(2));

const help = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`;

const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`;
              
if (args.h || args.help) {
    console.log(help);
    process.exit(0);
}

if (args.r || args.rules) {
    console.log(rules);
    process.exit(0);
}

let game = args._[0];

try {
    console.log(JSON.stringify(rpsls(game)));
    
} catch (error){
    console.log(help);
    console.log(rules);
    process.exit(0);
}