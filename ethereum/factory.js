import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(

  JSON.parse(CampaignFactory.interface),
  '0x50d38Da51E2C697D4394f7663750B68aDffbb155'
);

export default instance;
