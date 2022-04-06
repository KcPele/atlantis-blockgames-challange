import React, { useContext} from "react";

import { etherContext } from "./contexts/EtherProvider";

function WalletButton() {
  const { handleConnection } = useContext(etherContext);


   

  return (
    <div className="wallet-button">
      <button onClick={handleConnection}>CONNECT WALLECT</button>
    </div>
  );
}

export default WalletButton;
