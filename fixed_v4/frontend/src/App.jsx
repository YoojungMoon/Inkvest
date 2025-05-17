// frontend/src/App.jsx
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import CampaignList from "./components/CampaignList.jsx";

export default function App() {
  const [provider, setProvider] = useState(null);
  const [signer,   setSigner]   = useState(null);
  const [address,  setAddress]  = useState(null);

  /* 지갑 연결 */
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not detected.");
      return;
    }
    const prov = new ethers.BrowserProvider(window.ethereum);
    await prov.send("eth_requestAccounts", []);     // MetaMask 팝업
    const sign = await prov.getSigner();

    setProvider(prov);
    setSigner(sign);
    setAddress(await sign.getAddress());
  };

  /* 페이지 로드시 이미 연결돼 있으면 자동 복구 */
  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) connectWallet();
  }, []);

  /* ──────────── 렌더링 ──────────── */
  if (!provider || !signer) {
    /* 지갑 미연결 */
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Inkvest Crowdfunding</h1>
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Connect MetaMask
        </button>
      </div>
    );
  }

  /* 지갑 연결 완료 */
  return (
    <div className="p-6 font-sans">
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Inkvest Crowdfunding</h1>
        <span className="text-gray-600 text-sm">
          {address.slice(0, 6)}…{address.slice(-4)}
        </span>
      </div>

      {/* 고정 캠페인(#1) 후원 카드 */}
      <CampaignList signer={signer} />
    </div>
  );
}
