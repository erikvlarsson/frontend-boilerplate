import React from "react";

export default function List({ data }) {
  return <div>{JSON.stringify(data).replace(/,/g, "\n")}</div>;
}
