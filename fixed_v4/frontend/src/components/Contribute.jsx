import { useState } from "react";
import { ethers } from "ethers";
import { crowdCoin, signer } from "../utils/contracts";

export default function Contribute() {
  const [eth, setEth] = useState("");
  async function send() {
    await (await signer.sendTransaction({ to: crowdCoin.address, value: ethers.parseEther(eth) })).wait();
    alert("contributed");
    setEth("");
  }
  return (
    <div>
      <h3>Contribute</h3>
      <input value={eth} onChange={e=>setEth(e.target.value)} placeholder="ETH"/>
      <button onClick={send}>Send</button>
    </div>
  );
}
