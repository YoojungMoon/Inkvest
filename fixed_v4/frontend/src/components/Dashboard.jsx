import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import CrowdFundABI from "../contracts/CrowdFund.json";

const CF_ADDR = import.meta.env.VITE_CROWD_FUND_ADDRESS;

export default function Dashboard({ provider, signer, address }) {
  const [myContribs, setMyContribs] = useState([]);
  const [totalFunded, setTotalFunded] = useState("0");

  useEffect(() => {
    if (provider && address) fetchData();
    // eslint-disable-next-line
  }, [provider, address]);

  const fetchData = async () => {
    const cf = new ethers.Contract(CF_ADDR, CrowdFundABI.abi, provider);
    const nextId = Number(await cf.nextCampaignId());
    let my = [];
    let total = 0n;
    for (let id = 1; id < nextId; id++) {
      const pledged = await cf.pledgedOf(id, address);
      if (pledged > 0n) {
        const camp = await cf.campaigns(id);
        my.push({
          id,
          title: camp.title,
          amount: pledged
        });
      }
      const camp = await cf.campaigns(id);
      total += camp.pledged;
    }
    setMyContribs(my);
    setTotalFunded(total);
  };

  return (
    <div className="border p-4 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-3">Dashboard</h2>
      <p className="mb-2">Total ETH funded on platform: {ethers.formatEther(totalFunded)} </p>
      <h3 className="font-semibold">My Contributions</h3>
      {myContribs.length === 0 ? (
        <p className="text-sm">No contributions yet.</p>
      ) : (
        <ul className="list-disc ml-5">
          {myContribs.map(c => (
            <li key={c.id}>
              #{c.id} {c.title} — {ethers.formatEther(c.amount)} ETH
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
