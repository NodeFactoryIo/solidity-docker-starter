let Storage = artifacts.require('./Storage.sol');

module.exports = function(deployer) {
  deployer.deploy(Storage);
} as Truffle.Migration;

export {};
