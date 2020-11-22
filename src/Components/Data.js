import React from "react";

export default function DataDiv({ data }) {
  let dataArr = JSON.stringify(data).split(",");
  let lines = dataArr.map((line, i) => {
    return <div key={i}>{line}</div>;
  });

  return (
    <div
      style={{
        borderRadius: "5px",
        padding: "10px 20px",
        margin: "5px 0",
        width: "400px",
        maxWidth: "90%",
        background: "rgba(255,255,255,0.05)",
        border: "2px solid rgba(255,255,255,0.05)",
        color: "rgb(200,200,200)",
        fontSize: 18,
        letterSpacing: "1.5px",
        lineHeight: "25px",
        fontWeight: 400,
        // overflowWrap: "break-word",
        wordWrap: "break-word",
        hyphens: "auto",
      }}
    >
      {/* {lines} */}
      <div>accessToken:</div>
      <div style={{ textIndent: "50px" }}>
        ...{sessionStorage.accessToken.slice(-12)}
      </div>
      <div>refreshToken:</div>
      <div style={{ textIndent: "50px" }}>
        ...{localStorage.refreshToken.slice(-12)}
      </div>
    </div>
  );
}
