require("ts-node/register");
require('dotenv').config();
let HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: process.env.ETHEREUM_NETWORK_HOST || 'ethereum',
      port: '8545',
      network_id: '*',
    },
    goerli2: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        );
      },
      gas: 4612388,
      gasPrice: 100000,
      network_id: 5,
      confirmations: 1, // # of confs to wait between deployments. (default: 0)
      skipDryRun: false
    },
  },
  compilers: {
    solc: {
      version: "0.5.9"
    }
  },
  mocha: {
    useColors: true,
    reporter: 'mocha-multi-reporters',
    reporterOptions: {
      configFile: './mocha-smart-contracts-config.json',
    },
  },
  test_file_extension_regexp: /.*\.ts$/,
};
