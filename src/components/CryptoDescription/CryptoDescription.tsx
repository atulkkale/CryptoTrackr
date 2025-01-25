import { memo } from "react";

interface CryptoDescriptionProps {
  description: string | null;
}

const CryptoDescription: React.FC<CryptoDescriptionProps> = memo(
  ({ description }) => {
    return (
      <div className="crypto-description">
        <p>{description ? description : "Description not found"}</p>
      </div>
    );
  }
);

export default CryptoDescription;
