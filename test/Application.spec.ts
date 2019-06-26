const Application = artifacts.require("../contracts/Application.sol");

contract("Application", function(accounts) {

  const [deployer, user1, user2] = accounts;

  it("should update storage contract address", async () => {
    const contract = await Application.new(user1, {from: deployer});
    await contract.setStorageAddress(user2);
    const newAddress = await contract.getStorageAddress();
    return assert.strictEqual(newAddress, user2, "Should have updated address");
  });

});
