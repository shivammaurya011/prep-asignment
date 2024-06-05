import React, { useState } from "react";
import "./LeftSidebar.css";
import { Link } from "react-router-dom";
import PepsalesLogo from "../../../assets/logo.png";

const LeftSidebar = () => {
  const [activeLink, setActiveLink] = useState("/dashboard/buyer-activity");

  const handleMenuItemClick = (path) => {
    setActiveLink(path);
  };

  return (
    <aside className="left-sidebar">
      <div className="logo-container">
        <img src={PepsalesLogo} alt="Pepsales Logo" className="logo" />
        <span className="logo-text">Pepsales</span>
      </div>
      <ul className="menu-list">
        {/* Dashboard */}
        <li className="menu-item menu-title">Dashboard</li>
        <li className="menu-item">
          <Link
            to="/dashboard/buyer-activity"
            className={`menu-link ${
              activeLink === "/dashboard/buyer-activity" ? "active" : ""
            }`}
            onClick={() => handleMenuItemClick("/dashboard/buyer-activity")}
          >
            <i className="material-icons">link</i> Buyer activity
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/dashboard/pipeline-performance"
            className={`menu-link ${
              activeLink === "/dashboard/pipeline-performance" ? "active" : ""
            }`}
            onClick={() =>
              handleMenuItemClick("/dashboard/pipeline-performance")
            }
          >
            <i className="material-icons">rocket_launch</i> Pipeline performance
          </Link>
        </li>

        {/* Spacer */}
        <li className="spacer"></li>

        {/* Action center */}
        <li className="menu-item">
          <Link
            to="/action-center"
            className={`menu-link ${
              activeLink === "/action-center" ? "active" : ""
            }`}
            onClick={() => handleMenuItemClick("/action-center")}
          >
            <i className="material-icons">meeting_room</i> Action center
          </Link>
        </li>

        {/* Spacer */}
        <li className="spacer"></li>

        {/* Buyer insights */}
        <li className="menu-item menu-title">Buyer Insights</li>
        <li className="menu-item">
          <Link
            to="/buyer-insights/buyer-info"
            className={`menu-link ${
              activeLink === "/buyer-insights/buyer-info" ? "active" : ""
            }`}
            onClick={() => handleMenuItemClick("/buyer-insights/buyer-info")}
          >
            <i className="material-icons">description</i> Buyer info
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/buyer-insights/matching-clients"
            className={`menu-link ${
              activeLink === "/buyer-insights/matching-clients" ? "active" : ""
            }`}
            onClick={() =>
              handleMenuItemClick("/buyer-insights/matching-clients")
            }
          >
            <i className="material-icons">domain</i> Matching clients
          </Link>
        </li>

        {/* Spacer */}
        <li className="spacer"></li>

        {/* Demo */}
        <li className="menu-item menu-title">Demo</li>
        <li className="menu-item">
          <Link
            to="/demo/create-demo"
            className={`menu-link ${
              activeLink === "/demo/create-demo" ? "active" : ""
            }`}
            onClick={() => handleMenuItemClick("/demo/create-demo")}
          >
            <i className="material-icons">add</i> Create demo
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/demo/edit-demo"
            className={`menu-link ${
              activeLink === "/demo/edit-demo" ? "active" : ""
            }`}
            onClick={() => handleMenuItemClick("/demo/edit-demo")}
          >
            <i className="material-icons">edit</i> Edit demo
          </Link>
        </li>

        {/* Spacer */}
        <li className="spacer"></li>

        {/* Library */}
        <li className="menu-item menu-title">Library</li>
        <li className="menu-item">
          <Link
            to="/library/demos"
            className={`menu-link ${
              activeLink === "/library/demos" ? "active" : ""
            }`}
            onClick={() => handleMenuItemClick("/library/demos")}
          >
            <i className="material-icons">shelves</i> Demos
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/library/overlays"
            className={`menu-link ${
              activeLink === "/library/overlays" ? "active" : ""
            }`}
            onClick={() => handleMenuItemClick("/library/overlays")}
          >
            <i className="material-icons">sticky_note_2</i> Overlays
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/library/uploads"
            className={`menu-link ${
              activeLink === "/library/uploads" ? "active" : ""
            }`}
            onClick={() => handleMenuItemClick("/library/uploads")}
          >
            <i className="material-icons">publish</i> Uploads
          </Link>
        </li>

        {/* Spacer */}
        <li className="spacer"></li>

        {/* Access management */}
        <li className="menu-item">
          <Link
            to="/access-management"
            className={`menu-link ${
              activeLink === "/access-management" ? "active" : ""
            }`}
            onClick={() => handleMenuItemClick("/access-management")}
          >
            <i className="material-icons">settings</i> Access management
          </Link>
        </li>

        {/* Spacer */}
        <li className="spacer"></li>
      </ul>
    </aside>
  );
};

export default LeftSidebar;
