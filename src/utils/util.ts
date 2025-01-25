export const getCurrentTime = (): string => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

export const getRandomPriceCardColor = (): string => {
  const colors = ["#FDEDD4", "#E1F9F1", "#DBE3FF", "FBF5D5"];
  return colors[Math.floor(Math.random() * colors.length)];
};
