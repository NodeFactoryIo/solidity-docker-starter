import "@types/node";
import "truffle-typings";

const Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer: Truffle.Deployer) {
    deployer.deploy(Migrations);
} as Truffle.Migration;

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};
