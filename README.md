![NodeFactory](banner.png)

# Solidity-Docker-Starter
![CircleCI branch](https://img.shields.io/circleci/project/github/NodeFactoryIo/solidity-docker-starter/master.svg)

Current (master version uses typescript), versions without typescript are below:

* [ES6 + Truffle 4](https://github.com/NodeFactoryIo/solidity-docker-starter/tree/ES6-truffle4)
* [ES6 + Truffle 5](https://github.com/NodeFactoryIo/solidity-docker-starter/tree/ES6-truffle5)

## Requirements

Following software is required to be installed to use this repo:
 * [NodeJs](https://nodejs.org/en/) >= v8.4.0
 * docker
 * docker-compose

## Usage

Run `npx run build` which will
build docker image.

Run `npx run` to see all available commands:
clean                           - Removes all build directories and dependencies

lint                            - Runs tslint on current project

build                           - Builds new docker image

deploy                          - Run all missing migrations to deploy contracts to ethereum network. Command accepts param with id of network

redeploy                        - Run all migrations again to deploy contracts to ethereum network. Command accepts param with id of network

compile                         - Compiles all contracts and generates typings

solhint                         - Runs solhint on all smart contracts

test                            - Runs tests against contracts in docker. It accepts test name as optional argument


## Contribution

If this repository helped you, let us know by donating ETH to `0xbD9f96663E07a83ff18915c9074d9dc04d8E64c9` or feel free to contribute with more features!
