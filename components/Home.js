import React, { useState, useEffect } from "react";

import home from "../styles/home.module.sass";
import FullStuff from "./FullStuff";
import Popup from "./popup/Popup";
import PopupLaptop from './popup/PopupLaptop'

export default function NewHP({posts}) {

  const [popup2022, setPopup2022] = useState(false);
  const [popup2021, setPopup2021] = useState(false);
  const [popup2020, setPopup2020] = useState(false);
  const [popup2019, setPopup2019] = useState(false);
  const [popup2018, setPopup2018] = useState(false);
  const [popup2015, setPopup2015] = useState(false);
  const [popupOther, setPopupOther] = useState(false)
  const [popupPhoto1, setPopupPhoto1] = useState(false);
  const [popupPhoto2, setPopupPhoto2] = useState(false);
  const [popupPhoto3, setPopupPhoto3] = useState(false);
  const [popupPhoto4, setPopupPhoto4] = useState(false);
  const [popupPhoto5, setPopupPhoto5] = useState(false);
  const [popupOnWall, setPopupOnWall] = useState(false);
  const [popupQuote, setPopupQuote] = useState(false);
  const [popupLaptop, setPopupLaptop] = useState(false);
  const [popupYellow, setPopupYellow] = useState(false);
  const [popupBlue, setPopupBlue] = useState(false);
  const [popupRed, setPopupRed] = useState(false);
  const [popupYellowRight, setPopupYellowRight] = useState(false);
  const [popupPink, setPopupPink] = useState(false);
  const [popupNote, setPopupNote] = useState(false);
  

  const photo1 = posts.filter((post) => post.album === 'photo1');
  const photo2 = posts.filter((post) => post.album === 'photo2');
  const photo3 = posts.filter((post) => post.album === 'photo3');
  const photo4 = posts.filter((post) => post.album === 'photo4');
  const photo5 = posts.filter((post) => post.album === 'photo5');
  const photoOnWall = posts.filter((post) => post.album === 'photoWall');
  const yellowBook = posts.filter((post) => post.album === 'bookYellow');
  const blueBook = posts.filter((post) => post.album === 'bookBlue');
  const redBook = posts.filter((post) => post.album === 'bookRed');
  const pinkBook = posts.filter((post) => post.album === 'bookPink');
  const yellowRight = posts.filter((post) => post.album === 'bookYellowRight');
  const noteBook = posts.filter((post) => post.album === 'notebook');
  const quoteNote = posts.filter((post) => post.album === 'quoteNote');
  const laptop = posts.filter((post) => post.album === 'laptop');
  const year2022 = posts.filter((post) => post.album === 'year2022');
  const year2021 = posts.filter((post) => post.album === 'year2021');
  const year2020 = posts.filter((post) => post.album === 'year2020');
  const year2019 = posts.filter((post) => post.album === 'year2019');
  const year2018 = posts.filter((post) => post.album === 'year2018');
  const year2015 = posts.filter((post) => post.album === 'year2015-17');
  const others = posts.filter((post) => post.album === 'others');



  function handleOpenPopup2022() {
    setPopup2022(true);
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

  function handleOpenPopupOther() {
    setPopupOther(true);
  }
  
  function handleOpenPopupPhoto1() {
    setPopupPhoto1(true);
  }

  function handleOpenPopupPhoto2() {
    setPopupPhoto2(true);
  }

  function handleOpenPopupPhoto3() {
    setPopupPhoto3(true);
  }

  function handleOpenPopupPhoto4() {
    setPopupPhoto4(true);
  }

  function handleOpenPopupPhoto5() {
    setPopupPhoto5(true);
  }

  function handleOpenPopupOnWall() {
    setPopupOnWall(true);
  }

  function handleOpenPopupQuote() {
    setPopupQuote(true);
  }

  function handleOpenPopupLaptop() {
    setPopupLaptop(true);
  }

  function handleOpenPopupYellow() {
    setPopupYellow(true);
  }

  function handleOpenPopupBlue() {
    setPopupBlue(true);
  }

  function handleOpenPopupRed() {
    setPopupRed(true);
  }

  function handleOpenPopupYellowRight() {
    setPopupYellowRight(true);
  }

  function handleOpenPopupPink() {
    setPopupPink(true);
  }

  function handleOpenPopupNote() {
    setPopupNote(true);
  }

  function handleClosePopup() {
    setPopup2022(false);
    setPopup2021(false);
    setPopup2020(false);
    setPopup2019(false);
    setPopup2018(false);
    setPopup2015(false);
    setPopupOther(false);
    setPopupPhoto1(false);
    setPopupPhoto2(false);
    setPopupPhoto3(false);
    setPopupPhoto4(false);
    setPopupPhoto5(false);
    setPopupOnWall(false);
    setPopupQuote(false);
    setPopupLaptop(false);
    setPopupYellow(false);
    setPopupBlue(false);
    setPopupRed(false);
    setPopupYellowRight(false);
    setPopupPink(false);
    setPopupNote(false);
  }

  return (
    <main>
      <div className={home.homepage}>
        <FullStuff
          handleOpenPopupPhoto1={handleOpenPopupPhoto1}
          handleOpenPopupPhoto2={handleOpenPopupPhoto2}
          handleOpenPopupPhoto3={handleOpenPopupPhoto3}
          handleOpenPopupPhoto4={handleOpenPopupPhoto4}
          handleOpenPopupPhoto5={handleOpenPopupPhoto5}
          handleOpenPopup2022={handleOpenPopup2022}
          handleOpenPopup2021={handleOpenPopup2021}
          handleOpenPopup2020={handleOpenPopup2020}
          handleOpenPopup2019={handleOpenPopup2019}
          handleOpenPopup2018={handleOpenPopup2018}
          handleOpenPopup2015={handleOpenPopup2015}
          handleOpenPopupOther={handleOpenPopupOther}
          handleOpenPopupOnWall={handleOpenPopupOnWall}
          handleOpenPopupYellow={handleOpenPopupYellow}
          handleOpenPopupBlue={handleOpenPopupBlue}
          handleOpenPopupRed={handleOpenPopupRed}
          handleOpenPopupYellowRight={handleOpenPopupYellowRight}
          handleOpenPopupPink={handleOpenPopupPink}
          handleOpenPopupLaptop={handleOpenPopupLaptop}
          handleOpenPopupNote={handleOpenPopupNote}
          handleOpenPopupQuote={handleOpenPopupQuote}
          posts={posts}
        />
      </div>
      {popupPhoto1 ? (
        <Popup posts={photo1} handleClosePopup={handleClosePopup} />
      ) : null}
      {popupPhoto2 ? (
        <Popup posts={photo2} handleClosePopup={handleClosePopup} />
      ) : null}
      {popupPhoto3 ? (
        <Popup posts={photo3} handleClosePopup={handleClosePopup} />
      ) : null}
      {popupPhoto4 ? (
        <Popup posts={photo4} handleClosePopup={handleClosePopup} />
      ) : null}
      {popupPhoto5 ? (
        <Popup posts={photo5} handleClosePopup={handleClosePopup} />
      ) : null}
      {popupOnWall ? (
        <Popup posts={photoOnWall} handleClosePopup={handleClosePopup} />
      ) : null}
      {popupYellow ? (
        <Popup posts={yellowBook} handleClosePopup={handleClosePopup} />
      ) : null}
      {popupBlue ? (
        <Popup posts={blueBook} handleClosePopup={handleClosePopup} />
      ) : null}
      {popupRed ? (
        <Popup posts={redBook} handleClosePopup={handleClosePopup} />
      ) : null}
      {popupPink ? (
        <Popup posts={pinkBook} handleClosePopup={handleClosePopup} />
      ) : null}
      {popupYellowRight ? (
        <Popup posts={yellowRight} handleClosePopup={handleClosePopup} />
      ) : null}
      {popupNote ? (
        <Popup posts={noteBook} handleClosePopup={handleClosePopup} />
      ) : null}
      {popupQuote ? (
        <Popup posts={quoteNote} handleClosePopup={handleClosePopup} />
      ) : null}
      {popupLaptop ? (
        <PopupLaptop post={laptop} handleClosePopup={handleClosePopup} />
      ) : null}
    </main>
  );
}
