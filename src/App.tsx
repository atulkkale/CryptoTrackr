import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./views/Dashboard";
import OverView from "./views/OverView";
import History from "./views/History";
import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/overview" element={<OverView />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
