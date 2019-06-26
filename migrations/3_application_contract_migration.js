const Application = artifacts.require("./Application.sol");
const Storage = artifacts.require("./Storage.sol");

module.exports = function(deployer) {
  deployer.deploy(Application, Storage.address);
};
