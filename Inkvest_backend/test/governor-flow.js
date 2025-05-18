const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Governance flow", function () {
  it("should run proposal lifecycle", async function () {
    const [owner] = await ethers.getSigners();
    const GToken = await ethers.getContractFactory("GovernanceToken");
    const gtoken = await GToken.deploy();
    const Timelock = await ethers.getContractFactory("FundTimelock");
    const tl = await Timelock.deploy(0, [owner.address], [owner.address]);
    const Governor = await ethers.getContractFactory("FundGovernor");
    const gov = await Governor.deploy(gtoken.address, tl.address);

    await gtoken.delegate(owner.address);
    const tx = await gov.propose([], [], [], "test");
    const id = (await tx.wait()).events[0].args.proposalId;

    await ethers.provider.send("evm_mine");
    await gov.castVote(id, 1);
    for (let i=0;i<10;i++) await ethers.provider.send("evm_mine");
    expect(await gov.state(id)).to.be.gt(0);
  });
});
