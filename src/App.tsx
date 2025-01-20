import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Dashboard from "./views/Dashboard";
import Footer from "./components/Footer/Footer";
import OverView from "./views/OverView";
import History from "./views/History";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/overview" element={<OverView />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
