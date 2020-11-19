import React from "react";

export default function StateViewer({ state }) {
  let stateArray = JSON.stringify(state).split(",");
  let lines = stateArray.map((line) => {
    return <div>{line}</div>;
  });
  return <div style={{ color: "red" }}>{lines}</div>;
}
