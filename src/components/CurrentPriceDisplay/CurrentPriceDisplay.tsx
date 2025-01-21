import "./CurrentPriceDisplay.css";

const CurrentPriceDisplay: React.FC = () => {
  return (
    <div className="current-price">
      <h2>Bitcoin</h2>
      <img
        src="https://criptic.vercel.app/_next/static/media/bitcoin.81bd702b.svg"
        alt="Bitcoin"
      />
      <div className="coin-price">0.2231345 BTC</div>
      <ul>
        <li className="price">11,032.24 USD</li>
        <li className="percentage">↑ +12.5%</li>
      </ul>
    </div>
  );
};

export default CurrentPriceDisplay;
