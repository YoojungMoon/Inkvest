"use client";

import { useState } from "react";
import { ethers, BrowserProvider } from "ethers";
import { getCrowdFundContract } from "@/lib/contract";
import { Button } from "@/components/ui/button";

export default function CreateCampaign() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [goal, setGoal] = useState("");
  const [duration, setDuration] = useState("");
  const [uri, setUri] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    try {
      setLoading(true);
      if (!window.ethereum) throw new Error("Metamask 설치 필요");

      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = getCrowdFundContract(signer);

      const tx = await contract.createCampaign(
        ethers.parseEther(goal),       // 목표 금액 (ETH → wei)
        Number(duration) * 86400,      // 일 → 초
        title,
        artist,
        uri
      );
      const receipt = await tx.wait();
      alert("프로젝트 등록 성공!");
    } catch (err: any) {
      console.error(err);
      alert("실패: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      <input placeholder="프로젝트 제목" value={title} onChange={e => setTitle(e.target.value)} className="input" />
      <input placeholder="창작자 이름" value={artist} onChange={e => setArtist(e.target.value)} className="input" />
      <input placeholder="목표 금액 (ETH)" value={goal} onChange={e => setGoal(e.target.value)} className="input" />
      <input placeholder="진행 기간 (일)" value={duration} onChange={e => setDuration(e.target.value)} className="input" />
      <input placeholder="이미지 URL 또는 IPFS" value={uri} onChange={e => setUri(e.target.value)} className="input" />
      <Button onClick={handleCreate} disabled={loading}>
        {loading ? "등록 중..." : "프로젝트 등록하기"}
      </Button>
    </div>
  );
}
