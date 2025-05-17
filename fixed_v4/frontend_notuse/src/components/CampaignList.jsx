
import React, { useState } from "react";
import { ethers } from "ethers";
import CrowdFundABI from "../contracts/CrowdFund.json";
import { DEMO_CAMPAIGN as C } from "../constants/demoCampaign";

const CF_ADDR = import.meta.env.VITE_CROWD_FUND_ADDRESS;

export default function CampaignList({ signer }) {
  const [loading, setLoading] = useState(false);
  const [pledged, setPledged] = useState("0");

  const contribute = async (amount) => {
    if (!signer) return alert("지갑을 먼저 연결하세요");
    if (!amount) return alert("금액을 입력하세요");
    try {
      setLoading(true);
      const cf = new ethers.Contract(CF_ADDR, CrowdFundABI.abi, signer);
      const tx = await cf.contribute(C.id, { value: ethers.parseEther(amount) });
      await tx.wait();
      setPledged((prev) => (parseFloat(prev) + parseFloat(amount)).toString());
      alert("후원 완료!");
    } catch (e) {
      console.error(e);
      alert(e.message || "Tx 실패");
    }
    setLoading(false);
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-bold mb-3">{C.title}</h2>
      <img src={C.uri} alt={C.title} className="mb-3 rounded" />

      <p className="mb-1">창작자: {C.artist}</p>
      <p className="mb-1">목표: {C.goalWei} ETH</p>
      <p className="mb-1">모인 금액: {pledged} ETH</p>

      <input id="amt" placeholder="ETH" className="border px-2 mr-2" />
      <button
        disabled={loading}
        onClick={() => contribute(document.getElementById("amt").value || "0")}
        className="bg-rose-600 text-white px-4 py-1 rounded"
      >
        {loading ? "Waiting…" : "이 프로젝트 후원하기"}
      </button>
    </div>
  );
}
