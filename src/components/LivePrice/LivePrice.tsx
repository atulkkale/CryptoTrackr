import { memo, useEffect, useState } from "react";

interface LivePriceProps {
  id: string;
  symbol: string;
}

const LivePrice: React.FC<LivePriceProps> = memo(({ id, symbol }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [livePrice, setLivePrice] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const ws = new WebSocket(`wss://ws.coincap.io/prices?assets=${id}`);

    ws.onmessage = (event) => {
      try {
        setIsLoading(false);
        setError(null);

        const price = JSON.parse(event.data);
        setLivePrice(price[id]);
      } catch (err) {
        setError("Cannot fetch live price!");
      }
    };

    ws.onerror = () => {
      setError("Cannot fetch live price!");
    };

    return () => {
      ws.close();
    };
  }, [id]);

  if (isLoading) return <span>Loading Live Prices...</span>;

  if (error) return <span>{error}</span>;

  return (
    <span>
      {livePrice ? parseFloat(livePrice).toFixed(7) : "N/A"} {symbol}
    </span>
  );
});

export default LivePrice;
