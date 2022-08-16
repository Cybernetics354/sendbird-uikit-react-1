import React from "react";
import ReactDOM from "react-dom";

import { App as SendBirdApp } from "../dist";
import "../dist/dist/index.css";

const YOUR_APP_ID = "3156BA8E-9F72-47E7-8535-90C0E5270E64";
const USER_ID = "lorem354";

async function testing() {
  await new Promise((r) => setTimeout(r, 2000));

  return {
    type: "message",
    message: "Halo gaissss",
  };
}

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <SendBirdApp
        appId={YOUR_APP_ID}
        userId={USER_ID}
        onFilePicked={testing}
        externalBucketUrl="kompas"
      />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
