const EspToken = artifacts.require("./EspToken.sol");

module.exports = function (deployer) {
  deployer.deploy(EspToken, 500000000000 , 50000000000);
};
