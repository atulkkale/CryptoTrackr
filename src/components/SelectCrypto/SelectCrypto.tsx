import "./SelectCrypto.css";

const SelectedCrypto: React.FC = () => {
  return (
    <div className="selected-crypto">
      <select>
        <option value="Bitcoin">Bitcoin</option>
        <option value="Ethereum">Ethereum</option>
        <option value="XRP">XRP</option>
        <option value="Bitcoin Cash">Bitcoin Cash</option>
        <option value="EOS">EOS</option>
        <option value="Stellar">Stellar</option>
        <option value="Litecoin">Litecoin</option>
        <option value="Cardano">Cardano</option>
        <option value="Tether">Tether</option>
        <option value="IOTA">IOTA</option>
        <option value="TRON">TRON</option>
        <option value="Ethereum Classic">Ethereum Classic</option>
      </select>
    </div>
  );
};

export default SelectedCrypto;
