import { ReactNode, Suspense } from "react";

interface LazyLoaderProps {
  msg: ReactNode;
  children: ReactNode;
}

const LazyLoader: React.FC<LazyLoaderProps> = ({ msg, children }) => {
  return <Suspense fallback={msg}>{children}</Suspense>;
};

export default LazyLoader;
