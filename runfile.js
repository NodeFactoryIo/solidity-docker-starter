// tslint:disable-next-line
const {run, help} = require("runjs");

exports.clean = function() {
  run("docker-compose run --rm smart-contracts rm -rf build");
  run("rm -rf node_modules");
};

exports.lint = function() {
  run("docker-compose run --rm smart-contracts yarn lint");
};

exports.build = function() {
  run("docker-compose down");
  run("docker-compose -f docker-compose-cleanup.yml down -v");
  run("docker-compose build");
};

exports.deploy = function(env) {
  if (!env) {
    env = "development";
  }
  run(`docker-compose run --rm smart-contracts node_modules/.bin/truffle migrate --network ${env}`);
};

exports.redeploy = function(env) {
  if (!env) {
    env = "development";
  }
  run(
    `docker-compose run --rm smart-contracts node_modules/.bin/truffle migrate --reset`,
  );
};

exports.compile = function() {
  run(
    'docker-compose run --no-deps --rm smart-contracts sh -c "yarn generate"',
  );
};

exports.solhint = function() {
  run(
    "docker-compose run --rm smart-contracts sh -c " +
    '"./node_modules/solhint/solhint.js \\"contracts/**/*.sol\\""',
  );
};

exports.test = function(testName) {
  if (!testName) {
    testName = "test/*";
  }
  run(
    `docker-compose run --rm smart-contracts sh -c "yarn generate && node_modules/.bin/truffle test ${testName}"`,
  );
};

help(
  exports.deploy,
  "Run all missing migrations to deploy contracts" +
  " to ethereum network. Command accepts param with id of network",
);

help(
  exports.redeploy,
  "Run all migrations again to deploy contracts " +
  "to ethereum network. Command accepts param with id of network",
);

help(
  exports.compile,
  "Compiles all contracts and generates typings",
);

help(
  exports.solhint,
  "Runs solhint on all smart contracts",
);

help(
  exports.test,
  "Runs tests against contracts in docker. " +
  "It accepts test name as optional argument",
);

help(
  exports.clean,
    "Removes all build directories and dependencies",
);

help(
  exports.lint,
    "Runs tslint on current project",
);
help(
  exports.build,
    "Builds new docker image",
);
