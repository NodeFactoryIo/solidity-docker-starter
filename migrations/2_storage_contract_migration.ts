import "@types/node";
import "truffle-typings";

const Storage = artifacts.require("./Storage.sol");

module.exports = function(deployer: Truffle.Deployer) {
  deployer.deploy(Storage);
} as Truffle.Migration;

export {};
