import React, { useState, useEffect } from "react";

import home from "../styles/home.module.sass";
import Board from "./stuff/Board";
import FullStuff from "./FullStuff";
import Popup from "./Popup";
import Portrait from "./stuff/Portrait";

export default function NewHP({posts}) {
  const photoX = [1,2,3,4,5]
  const [popupBoard, setPopupBoard] = useState(false);
  const [popup2021, setPopup2021] = useState(false);
  const [popup2020, setPopup2020] = useState(false);
  const [popup2019, setPopup2019] = useState(false);
  const [popup2018, setPopup2018] = useState(false);
  const [popup2015, setPopup2015] = useState(false);
  // const 

  function handleOpenPopupBoard() {
    setPopupBoard(true);
  }

  function handleOpenPopup2021() {
    setPopup2021(true);
  }

  function handleOpenPopup2020() {
    setPopup2020(true);
  }

  function handleOpenPopup2019() {
    setPopup2019(true);
  }

  function handleOpenPopup2018() {
    setPopup2018(true);
  }

  function handleOpenPopup2015() {
    setPopup2015(true);
  }

  function handleClosePopup() {
    setPopupBoard(false);
    setPopup2021(false);
    setPopup2020(false);
    setPopup2019(false);
    setPopup2018(false);
    setPopup2015(false);
  }

  return (
    <main>
      <div className={home.homepage}>
        <FullStuff
          handleOpenPopupBoard={handleOpenPopupBoard}
          handleOpenPopup2021={handleOpenPopup2021}
          handleOpenPopup2020={handleOpenPopup2020}
          handleOpenPopup2019={handleOpenPopup2019}
          handleOpenPopup2018={handleOpenPopup2018}
          handleOpenPopup2015={handleOpenPopup2015}
          posts={posts}
        />
      </div>
      {popupBoard ? (
        <Popup handleClosePopup={handleClosePopup}>
          <Board posts={posts}/>
        </Popup>
      ) : null}
      {popup2021 ? (
        <Popup handleClosePopup={handleClosePopup}>
          <Portrait x={photoX[0]} posts={posts}/>
        </Popup>
      ) : null}
      {popup2020 ? (
        <Popup handleClosePopup={handleClosePopup}>
          <Portrait x={photoX[1]} posts={posts}/>
        </Popup>
      ) : null}
      {popup2019 ? (
        <Popup handleClosePopup={handleClosePopup}>
          <Portrait x={photoX[2]} posts={posts}/>
        </Popup>
      ) : null}
      {popup2018 ? (
        <Popup handleClosePopup={handleClosePopup}>
          <Portrait x={photoX[3]} posts={posts}/>
        </Popup> 
      ) : null}
      {popup2015 ? (
        <Popup handleClosePopup={handleClosePopup}>
          <Portrait x={photoX[4]} posts={posts}/>
        </Popup>
      ) : null}
    </main>
  );
}
