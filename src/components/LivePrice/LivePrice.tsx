import { memo, useEffect, useState } from "react";

interface LivePriceProps {
  id: string;
}

const LivePrice: React.FC<LivePriceProps> = memo(({ id }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [livePrice, setLivePrice] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  console.log("id", id);

  useEffect(() => {
    const ws = new WebSocket(`wss://ws.coincap.io/prices?assets=${id}`);

    ws.onmessage = (event) => {
      try {
        setIsLoading(false);
        setError(null);
        console.log(event.data);
        const price = JSON.parse(event.data);
        setLivePrice(price[id]);
      } catch (err) {
        setError("Cannot fetch live price!");
      }
    };

    ws.onerror = (err) => {
      console.log("err", err);
      setError("Cannot fetch live price!");
    };

    return () => {
      ws.close();
    };
  }, []);

  if (isLoading) return <span>Loading...</span>;

  if (error) return <span>{error}</span>;

  return <span>{parseFloat(livePrice).toFixed(7)}</span>;
});

export default LivePrice;
