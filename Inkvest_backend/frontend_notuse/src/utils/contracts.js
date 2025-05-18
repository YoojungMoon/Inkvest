import { ethers } from "ethers";
import crowdAbi from "../../../artifacts/contracts/CrowdCoin.sol/CrowdCoin.json";
import govAbi   from "../../../artifacts/contracts/FundGovernor.sol/FundGovernor.json";

/*──────────────── provider & signer ────────────────*/
let provider;
if (typeof window !== "undefined" && window.ethereum) {
  provider = new ethers.BrowserProvider(window.ethereum);
  await window.ethereum.request({ method: "eth_requestAccounts" });
} else {
  provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
  console.warn("No injected provider – using local RPC http://127.0.0.1:8545");
}

const signer = await provider.getSigner();

/*──────────────── env addresses ────────────────*/
const CROWD_ADDRESS    = import.meta.env.VITE_CROWDCOIN_ADDRESS;
const GOVERNOR_ADDRESS = import.meta.env.VITE_GOVERNOR_ADDRESS;

if (!CROWD_ADDRESS || !GOVERNOR_ADDRESS) {
  throw new Error("Environment variables VITE_CROWDCOIN_ADDRESS or VITE_GOVERNOR_ADDRESS are missing.");
}

/*──────────────── contract instances ─────────────*/
const crowdCoin = new ethers.Contract(CROWD_ADDRESS, crowdAbi.abi, signer);
const governor  = new ethers.Contract(GOVERNOR_ADDRESS, govAbi.abi, signer);

/*──────────────── exports ─────────────*/
export { provider, signer, crowdCoin, governor };