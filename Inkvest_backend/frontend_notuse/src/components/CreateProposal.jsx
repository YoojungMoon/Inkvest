import { useState } from "react";
import { governor } from "../utils/contracts";
export default function CreateProposal() {
  const [desc,setDesc]=useState("");
  async function submit() {
    await (await governor.propose([],[],[],desc)).wait();
    alert("submitted");
    setDesc("");
  }
  return (
    <div>
      <h3>Create Proposal</h3>
      <input value={desc} onChange={e=>setDesc(e.target.value)} placeholder="description"/>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
