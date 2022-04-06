import Card from "./Card";
import DragAndDropSection from "./DragAndDropSection";
import Header from "./Header";
import Loading from "./Helper/Loading";
import WalletButton from "./WalletButton";
function Menu() {
  return (
    <div className="menu">
      <Header />
      <WalletButton />
      <div className="menu-analysis">
        <p>LOYALTY ANALYSIS</p>
        <div className="menu-card">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <DragAndDropSection />
      <div className="menu-analysis">
        <p>CAMPAIGNS</p>
        <div className="menu-card">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Menu;
