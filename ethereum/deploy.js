const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
require('dotenv').config() // Store environment-specific variable from '.env' to process.env
const provider = new HDWalletProvider(
    process.env.MNENOMIC,
    "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: '0x' + compiledFactory.evm.bytecode.object })
    .send({ gas: '7000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
//Contract deployed to 0x6EB44De85740f2617705B17291B4da2a776C47Dd
//Contract deployed to 0x774fe88344aa3e95a8f1ea9a0ce5b4e481b15aa4