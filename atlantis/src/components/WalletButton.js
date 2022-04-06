import React, { useState } from "react";
import { ethers } from "ethers";

function WalletButton() {
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState(null);
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  const handleConnection = async () => {
    const getProvider = new ethers.providers.Web3Provider(window.ethereum);
    await requestAccount();
    setProvider(getProvider);
  };
  async function getAddress() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(account);
    }
  }
  getAddress();
  return (
    <div className="wallet-button">
      <button onClick={handleConnection}>CONNECT WALLECT</button>
    </div>
  );
}

export default WalletButton;
