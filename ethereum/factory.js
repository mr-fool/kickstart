import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x774fe88344aa3e95a8f1ea9a0ce5b4e481b15aa4'

);
export default instance;