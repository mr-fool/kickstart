const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
//ganache network port 8545
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach( async () => {
    accounts = await web3.eth.getAccounts();
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.abi))
        .deploy({data: compiledFactory.evm.bytecode.object})
        .send({from: accounts[0], gas: "1000000"});

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    [campaignAddress]= await factory.methods.getDeployedCampaigns().call();
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.abi),
        campaignAddress 
    );
});
