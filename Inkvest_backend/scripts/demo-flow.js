/**
 * scripts/demo-flow.js
 * 전체 E2E: CrowdCoin·ImageNFT·CrowdFund 배포 → 캠페인 #1 → 후원 → NFT 민팅
 */
const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const [creator, backer] = await ethers.getSigners();
  console.log("Creator :", creator.address);
  console.log("Backer  :", backer.address);

  /* 1. 배포 ─────────────────────────────────────── */
  const Coin = await ethers.getContractFactory("CrowdCoin");
  const coin = await Coin.deploy();
  await coin.waitForDeployment();

  const Nft  = await ethers.getContractFactory("ImageNFT");
  const nft  = await Nft.deploy();
  await nft.waitForDeployment();

  const Fund = await ethers.getContractFactory("CrowdFund");
  const fund = await Fund.deploy(await coin.getAddress(), await nft.getAddress());
  await fund.waitForDeployment();

  console.log("• CrowdCoin :", await coin.getAddress());
  console.log("• ImageNFT  :", await nft.getAddress());
  console.log("• CrowdFund :", await fund.getAddress());

  /* 2. 권한 이전 ─────────────────────────────────── */
  await coin.transferOwnership(await fund.getAddress());
  await nft.transferOwnership(await fund.getAddress());
  console.log("Ownership transferred to CrowdFund");

  /* 3. 캠페인 #1 생성 ─────────────────────────────── */
  await fund.createCampaign(
    ethers.parseEther("0.1"), // 0.1 ETH goal
    3600,                     // 1 hour
    "Demo Art #1",
    "Demo Artist",
    "ipfs://QmXXXXXXXXXXXXXXXXXXXXXXXX/metadata.json"
  );
  console.log("Campaign #1 created");

  /* 4. 후원 + NFT 민팅 ────────────────────────────── */
  await fund.connect(backer).contribute(1, { value: ethers.parseEther("0.1") });
  await fund.connect(backer).mintArtworkNFT(1);
  console.log("Backer contributed & minted NFT");

  /* 5. 결과 검증 ─────────────────────────────────── */
  const bal = await nft.balanceOf(backer.address);
  const uri = await nft.tokenURI(1);
  console.log("Backer NFT balance :", bal.toString()); // 1
  console.log("Token #1 URI       :", uri);
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
