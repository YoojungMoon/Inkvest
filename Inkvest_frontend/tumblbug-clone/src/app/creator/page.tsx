"use client";

import { useEffect, useState } from "react";
import { getCrowdFundContract } from "@/lib/contract";
import { BrowserProvider, ethers } from "ethers";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function CreatorPage() {
  const [loading, setLoading] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [campaignId] = useState(1); // 항상 1번 캠페인만 사용

  const handleWithdraw = async () => {
    try {
      setLoading(true);
      if (!window.ethereum) throw new Error("Metamask가 설치되어 있지 않습니다.");
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = getCrowdFundContract(signer);

      const tx = await contract.withdraw(campaignId);
      await tx.wait();

      alert("출금이 완료되었습니다!");
    } catch (err: any) {
      console.error(err);
      alert("출금 실패: " + (err.message || "알 수 없는 오류"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">창작자 전용 페이지</h1>

        <Card className="max-w-xl">
          <CardContent className="p-6 space-y-4">
            <p className="text-lg">📦 캠페인: 무용영화 Entangled Body 얽힌몸</p>
            <p className="text-sm text-gray-500">※ 목표 달성 후 1회만 출금 가능합니다.</p>
          </CardContent>
          <CardFooter className="p-6">
            <Button
              onClick={handleWithdraw}
              disabled={loading}
              className="w-full py-6 text-lg"
            >
              {loading ? "출금 중..." : "후원금 출금하기"}
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
