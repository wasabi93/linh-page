import React, { useState, useEffect, useMemo, useCallback } from "react";

import home from "../styles/home.module.sass";
import FullStuff from "./FullStuff";
import Popup from "./popup/Popup";
import PopupLaptop from './popup/PopupLaptop';
import PopupList from "./popup/PopupList";
import PopupPortrait from "./popup/PopupPortrait";

export default function Home({posts}) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState('Popup')
  const [postType, setPostType] = useState('others')

  const PopupComponent = useMemo(() => {
    switch (popupType) {
      case 'PopupPortrait': return PopupPortrait;
      case 'PopupLaptop': return PopupLaptop;
      case 'PopupList': return PopupList;
      default: return Popup;
    }
  }, [popupType])

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.album === postType);
  }, [postType, posts])

  const yellowBook = posts.filter((post) => post.album === 'bookYellow');
  const blueBook = posts.filter((post) => post.album === 'bookBlue');
  const redBook = posts.filter((post) => post.album === 'bookRed');
  const pinkBook = posts.filter((post) => post.album === 'bookPink');
  const yellowRight = posts.filter((post) => post.album === 'bookYellowRight');

  const showPopupWithData = useCallback((postType, popupType) => {
    setPostType(postType)
    setPopupType(popupType)
    setShowPopup(true)
  }, [])

  // popup list
  const handleOpenPopup2022 = useCallback(() => showPopupWithData('year2022', 'PopupList'), [])
  const handleOpenPopup2021 = useCallback(() => showPopupWithData('year2021', 'PopupList'), [])
  const handleOpenPopup2020 = useCallback(() => showPopupWithData('year2020', 'PopupList'), [])
  const handleOpenPopup2019 = useCallback(() => showPopupWithData('year2019', 'PopupList'), [])
  const handleOpenPopup2018 = useCallback(() => showPopupWithData('year2018', 'PopupList'), [])
  const handleOpenPopup2015 = useCallback(() => showPopupWithData('year2015-17', 'PopupList'), [])
  const handleOpenPopupOther = useCallback(() => showPopupWithData('others', 'PopupList'), [])

  // popup portrait
  const handleOpenPopupPhoto1 = useCallback(() => showPopupWithData('photo1', 'PopupPortrait'), [])
  const handleOpenPopupPhoto2 = useCallback(() => showPopupWithData('photo2', 'PopupPortrait'), [])
  const handleOpenPopupPhoto3 = useCallback(() => showPopupWithData('photo3', 'PopupPortrait'), [])
  const handleOpenPopupPhoto4 = useCallback(() => showPopupWithData('photo4', 'PopupPortrait'), [])
  const handleOpenPopupPhoto5 = useCallback(() => showPopupWithData('photo5', 'PopupPortrait'), [])
  const handleOpenPopupOnWall = useCallback(() => showPopupWithData('photoWall', 'PopupPortrait'), [])

  // popup default
  const handleOpenPopupYellow = useCallback(() => showPopupWithData('bookYellow', 'Popup'), [])
  const handleOpenPopupBlue = useCallback(() => showPopupWithData('bookBlue', 'Popup'), [])
  const handleOpenPopupRed = useCallback(() => showPopupWithData('bookRed', 'Popup'), [])
  const handleOpenPopupPink = useCallback(() => showPopupWithData('bookPink', 'Popup'), [])
  const handleOpenPopupYellowRight = useCallback(() => showPopupWithData('bookYellowRight', 'Popup'), [])
  const handleOpenPopupNote = useCallback(() => showPopupWithData('notebook', 'Popup'), [])
  const handleOpenPopupQuote = useCallback(() => showPopupWithData('quoteNote', 'Popup'), [])

  // popup laptop
  const handleOpenPopupLaptop = useCallback(() => showPopupWithData('laptop', 'PopupLaptop'), [])

  const handleClosePopup = useCallback(() => {
    setShowPopup(false)
  }, [])

  return (
    <main>
      <div className={home.homepage}>
        <FullStuff
          yellowBook={yellowBook}
          blueBook={blueBook}
          redBook={redBook}
          pinkBook={pinkBook}
          yellowRight={yellowRight}
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
      {showPopup && (
        <PopupComponent posts={filteredPosts} handleClosePopup={handleClosePopup} />
      )}
    </main>
  );
}
