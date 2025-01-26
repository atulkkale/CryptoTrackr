import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy } from "react";

import Layout from "./components/Layout/Layout";
import LazyLoader from "@components/LazyLoader/LazyLoader";
import LoadingText from "@components/LoadingText/LoadingText";

const DashboardPage = lazy(() => import("./views/DashboardPage"));
const OverViewPage = lazy(() => import("./views/OverViewPage"));
const HistoryPage = lazy(() => import("./views/HistoryPage"));

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route
              path="/dashboard"
              element={
                <LazyLoader msg={<LoadingText size="xl" position="center" />}>
                  <DashboardPage />
                </LazyLoader>
              }
            />
            <Route
              path="/overview"
              element={
                <LazyLoader msg={<LoadingText size="xl" position="center" />}>
                  <OverViewPage />
                </LazyLoader>
              }
            />
            <Route
              path="/history"
              element={
                <LazyLoader msg={<LoadingText size="xl" position="center" />}>
                  <HistoryPage />
                </LazyLoader>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
