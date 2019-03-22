import web3 from './web3';
import CampaignFactory from './buildCampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    0x6EB44De85740f2617705B17291B4da2a776C47Dd

);
export default instance;