import { Contract, JsonRpcSigner } from "ethers";
import CrowdFundABI from "./abi/CrowdFund.json";

const address = process.env.NEXT_PUBLIC_CROWD_FUND_ADDRESS;

export function getCrowdFundContract(signer: JsonRpcSigner) {
  if (!address) throw new Error("오류 : CrowdFund 컨트랙트 주소가 설정되지 않았습니다.");
  return new Contract(address, CrowdFundABI.abi, signer);
}
