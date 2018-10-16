const Application = artifacts.require("../contracts/Application.sol");

contract("Application", function([deployer, user1]) {

  it("should update storage contract address", async () => {
    const contract = await Application.new("0x0", {from: deployer});
    await contract.setStorageAddress(user1);
    const newAddress = await contract.getStorageAddress();
    return assert.strictEqual(newAddress, user1, "Should have updated address");
  });

});
