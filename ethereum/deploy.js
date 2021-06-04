const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const campaignFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'rail avoid enrich enroll school debate wait average robot suffer endorse farm',
  'https://rinkeby.infura.io/v3/7bfd0f4c602244d2a2a070f090b27dcf'

);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(campaignFactory.interface))
    .deploy({ data: campaignFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });


  console.log("Contract deployed to", result.options.address);
};
deploy();
