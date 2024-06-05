import React, { useState } from "react";
import "./FileUploader.css";
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

function FileUploader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const closeDropzone = () => {
    setIsOpen(false);
  };

  const uploader = Uploader({
    apiKey: "free",
  });

  const options = { multi: true };
  return (
    <div>
      {!isOpen && (
        <button className="upload-button" onClick={toggle}>Upload a file...</button>
      )}
      {isOpen && (
        <div className="dropzone-container">
          <button onClick={closeDropzone} className="close-button">Close</button>
          <UploadDropzone
            uploader={uploader}
            options={options}
            onUpdate={(files) => console.log(files)}
            width="600px"
            height="375px"
          />
        </div>
      )}
    </div>
  );
}

export default FileUploader;
