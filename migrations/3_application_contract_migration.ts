import "@types/node";
import "truffle-typings";

const Application = artifacts.require("./Application.sol");
const Storage = artifacts.require("./Storage.sol");

module.exports = function(deployer: Truffle.Deployer) {
  deployer.deploy(Application, Storage.address);
} as Truffle.Migration;

export {};
