export const getCurrentTime = (): string => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};
