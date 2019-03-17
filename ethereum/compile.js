const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');


const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');
var input = {
	language: 'Solidity',
	sources: {
		'Campaign.sol': {
			content:  fs.readFileSync("contracts/Campaign.sol",'utf-8')
		}
	},
	settings: {
		outputSelection: {
			'*': {
				'*': [ '*' ]
			}
		}
	}
}

var output = JSON.parse(solc.compile(JSON.stringify(input)));
fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJsonSync (
        path.resolve(buildPath, contract + '.json'),
        output[contract]
    );
}