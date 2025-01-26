import { ReactNode } from "react";

import "./LadingText.css";

interface LoadingTextProps {
  position?: string;
  size?: "sm" | "md" | "xl";
  children?: ReactNode;
}

const LoadingText: React.FC<LoadingTextProps> = ({
  position,
  size,
  children,
}) => {
  let generatedClasses = "loading-text ";

  if (position) generatedClasses += `text-${position} `;
  if (size) generatedClasses += size;

  return (
    <p className={generatedClasses}>{children ? children : "Loading..."}</p>
  );
};

export default LoadingText;
