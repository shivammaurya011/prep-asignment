import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftSidebar from "./components/sidebar/left/LeftSidebar";
import MainContent from "./components/Main/MainContent";
// import RightSidebar from "./components/sidebar/right/RightSidebar";
import Header from "./components/Header/Header";

import BuyerActivity from "./pages/dashboard/buyer-activity/BuyerActivity";
import PipelinePerformance from "./pages/dashboard/pipeline-performance/PipelinePerformance";
import AccessManagement from "./pages/access-management/AccessManagement";
import ActionCenter from "./pages/action-center/ActionCenter";
import BuyerInfo from "./pages/buyer-insights/buyer-info/BuyerInfo";
import MatchingClients from "./pages/buyer-insights/matching-clients/MatchingClients";
import CreateDemo from "./pages/demo/create-demo/CreateDemo";
import EditDemo from "./pages/demo/edit-demo/EditDemo";
import Demos from "./pages/library/demos/Demos";
import Overlays from "./pages/library/overlays/Overlays";
import Uploads from "./pages/library/uploads/Uploads";

function App() {
  return (
    <Router>
      <div className="app">
        <LeftSidebar />
        <div className="content-container">
          <Header />
          <div className="main-content">
            <MainContent />
            <Routes>
              <Route index element={<BuyerActivity />} />
              <Route
                path="/dashboard/buyer-activity"
                element={<BuyerActivity />}
              />
              <Route
                path="/dashboard/pipeline-performance"
                element={<PipelinePerformance />}
              />
              <Route path="/access-management" element={<AccessManagement />} />{" "}
              <Route path="/action-center" element={<ActionCenter />} />{" "}
              <Route
                path="/buyer-insights/buyer-info"
                element={<BuyerInfo />}
              />{" "}
              <Route
                path="/buyer-insights/matching-clients"
                element={<MatchingClients />}
              />{" "}
              <Route path="/demo/create-demo" element={<CreateDemo />} />{" "}
              <Route path="/demo/edit-demo" element={<EditDemo />} />{" "}
              <Route path="/library/demos" element={<Demos />} />
              <Route path="/library/overlays" element={<Overlays />} />{" "}
              <Route path="/library/uploads" element={<Uploads />} />{" "}
            </Routes>
          </div>
        </div>
        {/* <RightSidebar /> */}
      </div>
    </Router>
  );
}

export default App;
