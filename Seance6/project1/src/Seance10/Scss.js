import React from "react";
import Style from "./style.module.scss";

const styleP = { color: "red" };
const styleP2 = { background: "green" };

console.log({ Style });
export default function Scss() {
  return (
    <div>
      <h1>Sytle Scss</h1>
      <p className={Style?.monji}> Ahmed est la bonjour ;sdnfsjdnf</p>
    </div>
  );
}
