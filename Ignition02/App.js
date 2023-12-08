{/* <div id="parent">
  <div id="child">
    <h1>Hi I am H1 tag </h1>
    <h2>Hi I am H1 tag </h2>
  </div>
  <div id="child2">
    <h1>Hi I am H1 tag </h1>
    <h2>Hi I am H1 tag </h2>
  </div>
</div> */}

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namaste React"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
