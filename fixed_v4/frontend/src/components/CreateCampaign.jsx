import React, { useState } from "react";
import { ethers } from "ethers";
import CrowdFundABI from "../contracts/CrowdFund.json";

const CROWD_FUND_ADDRESS = import.meta.env.VITE_CROWD_FUND_ADDRESS;

export default function CreateCampaign({ signer }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [goal, setGoal] = useState('');
  const [duration, setDuration] = useState('');
  const [uri, setUri] = useState('');

  const handleCreate = async () => {
    if (!signer) { alert("Connect wallet first"); return; }
    if (!CROWD_FUND_ADDRESS) { alert("CrowdFund address env missing"); return; }
    const contract = new ethers.Contract(CROWD_FUND_ADDRESS, CrowdFundABI.abi, signer);
    const tx = await contract.createCampaign(
      ethers.parseEther(goal || "0"),
      duration,
      title,
      artist,
      uri
    );
    await tx.wait();
    alert("Campaign created!");
    // reset
    setTitle(''); setArtist(''); setGoal(''); setDuration(''); setUri('');
  };

  return (
    <div className="border p-4 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-3">Create Campaign</h2>
      <div className="grid grid-cols-2 gap-2">
        <input placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input placeholder="Artist" value={artist} onChange={(e)=>setArtist(e.target.value)} />
        <input placeholder="Goal (ETH)" value={goal} onChange={(e)=>setGoal(e.target.value)} />
        <input placeholder="Duration (sec)" value={duration} onChange={(e)=>setDuration(e.target.value)} />
        <input className="col-span-2" placeholder="Image URI (IPFS/https)" value={uri} onChange={(e)=>setUri(e.target.value)} />
      </div>
      <button onClick={handleCreate} className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">Create</button>
    </div>
  );
}
