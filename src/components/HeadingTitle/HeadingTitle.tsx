import { Link } from "react-router-dom";

const HeadingTitle: React.FC = () => {
  return (
    <h1>
      <Link to="/" title="CryptoTrackR">
        CryptoTrackR
      </Link>
    </h1>
  );
};

export default HeadingTitle;
