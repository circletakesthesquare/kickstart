import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(

  JSON.parse(CampaignFactory.interface),
  '0xA82975D19fA72a4fED32545f1a63d99C83FcAbC8'
);

export default instance;
