import React from "react";
import Data from "../Components/Data";
import BottomNav from "../Components/BottomNav";

export default function Home() {
  return (
    <div>
      <Data data={localStorage} />
      <BottomNav />
    </div>
  );
}
