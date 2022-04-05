import react, { useState } from "react";

import DragAndDrop from "./components/DragAndDrop";
import { ethers } from "ethers";

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const handleConnection = async () => {
    const getProvider = new ethers.providers.Web3Provider(window.ethereum);
    await getProvider.send("eth_requestAccounts", []);

    setProvider(provider);
    const getSigner = getProvider.getSigner();
    setSigner(getSigner);
    
  };
  console.log(signer)
  return (
    <div>
      <div>
        <button onClick={handleConnection}>Connect</button>
      </div>
      <DragAndDrop />
    </div>
  );
}

export default App;
