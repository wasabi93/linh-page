import React, { useState, useEffect } from "react";
import Image from "next/image";

import home from "../styles/home.module.sass";

import turnOn from "../public/lamp/lamp_on.png";
import turnOff from "../public/lamp/lamp_off.png";

export default function Lamb() {
  const [switchLamb, setSwitchLamb] = useState(true);

  function handleSwitchLamb() {
    setSwitchLamb(!switchLamb);
  }

  useEffect(() => {}, [switchLamb]);

  return (
    <div className={home.lamb}>
      <div className={home.lambSwitch} onClick={handleSwitchLamb}></div>
      <div>
        {switchLamb ? (
          <div className={home.turnOn}>
            <Image src={turnOn} alt="" layout="responsive" />
          </div>
        ) : (
          <div className={home.turnOff}>
            <Image src={turnOff} alt="" layout="responsive" />
          </div>
        )}
      </div>
    </div>
  );
}
