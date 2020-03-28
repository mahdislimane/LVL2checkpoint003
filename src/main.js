import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import ProfilPhoto from "./profile/ProfilPhoto";
import FullName from "./profile/FullName";
import Address from "./profile/Address";

function Main() {
  return (
    <div>
      <ProfilPhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default Main;
