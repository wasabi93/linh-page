import React, { useState, useCallback } from "react";
import Image from "next/image";

import home from "../../styles/home.module.sass";

import turnOn from "../../public/stuff/lamp/lamp_on.png";
import turnOff from "../../public/stuff/lamp/lamp_off.png";

export default function Lamb() {
  const [switchLamb, setSwitchLamb] = useState(true);

  const handleSwitchLamb = useCallback(() => {
    setSwitchLamb(!switchLamb);
  },[switchLamb])

  return (
    <>
    <div className={home.lamb}>
      <div className={home.lambSwitch} onClick={handleSwitchLamb}></div>
      <div className={switchLamb ? home.turnOn : home.none}>
        <Image src={turnOn} alt="" layout="responsive" />
      </div>
      <div className={switchLamb ? home.none : home.turnOff}>
        <Image src={turnOff} alt="" layout="responsive" />
      </div>
    </div>
    </>
  );
}
