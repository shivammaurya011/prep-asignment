import React from "react";
import "./Header.css";
import FileUploader from "../File/FileUploader";

const Header = () => {
  return (
    <header className="header">
      <div className="left-container">
        <div className="account-details">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAoklEQVR4AWMQxANGmCQfujgXH1yST1ocSYKPgUHcQksEJslQxQrXwsAgEjcl3UIZJsnQPIUBqoVBq+rouWZvY0GYsVwaz9YwsDIAgdvCZ/8fNNtKs3LBHcQw6+f/KrfQrnP///8/F8rAAHIMQvLofzD4+WyNBQPMbwidIKm356YYM7Bi+JPLeOHRoyuqNBi4sAUCF5+xFgO6FCIQuLhGcjIBAKGnWBaeLBmSAAAAAElFTkSuQmCC"
            alt="Account"
            className="account-image"
          />
          <div className="text-container">
            <span className="top-text">Target account</span>
            <span className="bottom-text">Nike Inc.</span>
          </div>
        </div>
        <div className="arrows-container">
          <i className="material-icons">expand_less</i>
          <i className="material-icons">expand_more</i>
        </div>
      </div>

      {/* FileUploader */}
      <FileUploader />

      <div className="right-container">
        <div className="user-container">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
            alt="User"
            className="user-image"
          />
        </div>
        <div className="arrows-container">
          <i className="material-icons">expand_more</i>
        </div>
      </div>
    </header>
  );
};

export default Header;
