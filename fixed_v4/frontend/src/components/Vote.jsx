import { useState } from "react";
import { governor } from "../utils/contracts";
export default function Vote() {
  const [id,setId]=useState("");
  async function cast(v) {
    await (await governor.castVote(id, v?1:0)).wait();
    alert("voted");
  }
  return (
    <div>
      <h3>Vote</h3>
      <input value={id} onChange={e=>setId(e.target.value)} placeholder="proposal id"/>
      <button onClick={()=>cast(true)}>Yes</button>
      <button onClick={()=>cast(false)}>No</button>
    </div>
  );
}
