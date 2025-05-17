export default function ConnectWallet({ address, onConnect }) {
  async function connect() {
    if (!window.ethereum) return alert("Install MetaMask");
    const [addr] = await window.ethereum.request({ method: "eth_requestAccounts" });
    onConnect(addr);
  }
  return address ? (
    <div>Connected: {address.slice(0,6)}…</div>
  ) : (
    <button onClick={connect}>Connect Wallet</button>
  );
}
