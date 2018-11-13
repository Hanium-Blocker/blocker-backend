const Web3 = require('web3');
const web3Config = require('../config/web3Config');

const rpcURL = web3Config.rpcUrl;
const web3 = new Web3(rpcURL);

const contract = new web3.eth.Contract(web3Config.contractABI, web3Config.contractAddress);

contract.methods.candidates(2).call({ from: web3Config.account }).then((result) => {
  console.log(result);
});
