// tslint:disable-next-line
const {run, help} = require("runjs");

export function clean() {
  run("docker-compose run --rm smart-contracts rm -rf build");
  run("rm -rf node_modules");
}

export function lint() {
  run("docker-compose run --rm smart-contracts yarn lint");
}

export function build() {
  run("docker-compose down");
  run("docker-compose -f docker-compose-cleanup.yml down -v");
  run("docker-compose build");
}

export function deploy(env: string) {
  if (!env) {
    env = "development";
  }
  run(`docker-compose run --rm smart-contracts node_modules/.bin/truffle migrate --network ${env}`);
}

export function redeploy(env: string) {
  if (!env) {
    env = "development";
  }
  run(
    `docker-compose run --rm smart-contracts node_modules/.bin/truffle migrate --reset --network ${env}`,
  );
}

export function compile() {
  run(
    'docker-compose run --no-deps --rm smart-contracts sh -c "yarn generate"',
  );
}

export function solhint() {
  run(
    "docker-compose run --rm smart-contracts sh -c " +
    '"./node_modules/solhint/solhint.js \\"contracts/**/*.sol\\""',
  );
}

export function test(testName: string) {
  if (!testName) {
    testName = "test/*";
  }
  solhint();
  run(
    `docker-compose run --rm smart-contracts node_modules/.bin/truffle test ${testName}`,
  );
}

help(
  deploy,
  "Run all missing migrations to deploy contracts" +
  " to ethereum network. Command accepts param with id of network",
);

help(
  redeploy,
  "Run all migrations again to deploy contracts " +
  "to ethereum network. Command accepts param with id of network",
);

help(
  compile,
  "Compiles all contracts and generates typings",
);

help(
  solhint,
  "Runs solhint on all smart contracts",
);

help(
  test,
  "Runs tests against contracts in docker. " +
  "It accepts test name as optional argument",
);

help(
    clean,
    "Removes all build directories and dependencies"
);

help(
    lint,
    "Runs tslint on current project"
);
help(
    build,
    "Builds new docker image"
);
