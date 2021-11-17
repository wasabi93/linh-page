import React, { useState, useMemo, useCallback } from 'react'
import dynamic from 'next/dynamic'

import home from '../styles/home.module.sass'
const FullStuff = dynamic(() => import('./FullStuff'))
const Popup = dynamic(() => import('./popup/Popup'))
const PopupLaptop = dynamic(() => import('./popup/PopupLaptop'))
const PopupList = dynamic(() => import('./popup/PopupList'))
const PopupPortrait = dynamic(() => import('./popup/PopupPortrait'))

export default function Home({ posts }) {
  const [showPopup, setShowPopup] = useState(false)
  const [popupType, setPopupType] = useState('Popup')
  const [postType, setPostType] = useState('others')

  const PopupComponent = useMemo(() => {
    switch (popupType) {
    case 'PopupPortrait':
      return PopupPortrait
    case 'PopupLaptop':
      return PopupLaptop
    case 'PopupList':
      return PopupList
    default:
      return Popup
    }
  }, [popupType])

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.album === postType)
  }, [postType, posts])

  const yellowBook = posts.filter((post) => post.album === 'bookYellow')
  const blueBook = posts.filter((post) => post.album === 'bookBlue')
  const redBook = posts.filter((post) => post.album === 'bookRed')
  const pinkBook = posts.filter((post) => post.album === 'bookPink')
  const yellowRight = posts.filter((post) => post.album === 'bookYellowRight')

  const showPopupWithData = useCallback((postType, popupType) => {
    setPostType(postType)
    setPopupType(popupType)
    setShowPopup(true)
  }, [])

  // popup list
  const handleOpenPopup2022 = useCallback(
    () => showPopupWithData('year2022', 'PopupList'),
    [showPopupWithData]
  )
  const handleOpenPopup2021 = useCallback(
    () => showPopupWithData('year2021', 'PopupList'),
    [showPopupWithData]
  )
  const handleOpenPopup2020 = useCallback(
    () => showPopupWithData('year2020', 'PopupList'),
    [showPopupWithData]
  )
  const handleOpenPopup2019 = useCallback(
    () => showPopupWithData('year2019', 'PopupList'),
    [showPopupWithData]
  )
  const handleOpenPopup2018 = useCallback(
    () => showPopupWithData('year2018', 'PopupList'),
    [showPopupWithData]
  )
  const handleOpenPopup2015 = useCallback(
    () => showPopupWithData('year2015-17', 'PopupList'),
    [showPopupWithData]
  )
  const handleOpenPopupOther = useCallback(
    () => showPopupWithData('others', 'PopupList'),
    [showPopupWithData]
  )

  // popup portrait
  const handleOpenPopupPhoto1 = useCallback(
    () => showPopupWithData('photo1', 'PopupPortrait'),
    [showPopupWithData]
  )
  const handleOpenPopupPhoto2 = useCallback(
    () => showPopupWithData('photo2', 'PopupPortrait'),
    [showPopupWithData]
  )
  const handleOpenPopupPhoto3 = useCallback(
    () => showPopupWithData('photo3', 'PopupPortrait'),
    [showPopupWithData]
  )
  const handleOpenPopupPhoto4 = useCallback(
    () => showPopupWithData('photo4', 'PopupPortrait'),
    [showPopupWithData]
  )
  const handleOpenPopupPhoto5 = useCallback(
    () => showPopupWithData('photo5', 'PopupPortrait'),
    [showPopupWithData]
  )
  const handleOpenPopupOnWall = useCallback(
    () => showPopupWithData('photoWall', 'PopupPortrait'),
    [showPopupWithData]
  )

  // popup default
  const handleOpenPopupYellow = useCallback(
    () => showPopupWithData('bookYellow', 'Popup'),
    [showPopupWithData]
  )
  const handleOpenPopupBlue = useCallback(
    () => showPopupWithData('bookBlue', 'Popup'),
    [showPopupWithData]
  )
  const handleOpenPopupRed = useCallback(
    () => showPopupWithData('bookRed', 'Popup'),
    [showPopupWithData]
  )
  const handleOpenPopupPink = useCallback(
    () => showPopupWithData('bookPink', 'Popup'),
    [showPopupWithData]
  )
  const handleOpenPopupYellowRight = useCallback(
    () => showPopupWithData('bookYellowRight', 'Popup'),
    [showPopupWithData]
  )
  const handleOpenPopupNote = useCallback(
    () => showPopupWithData('notebook', 'Popup'),
    [showPopupWithData]
  )
  const handleOpenPopupQuote = useCallback(
    () => showPopupWithData('quoteNote', 'Popup'),
    [showPopupWithData]
  )

  // popup laptop
  const handleOpenPopupLaptop = useCallback(
    () => showPopupWithData('laptop', 'PopupLaptop'),
    [showPopupWithData]
  )

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
        <PopupComponent
          posts={filteredPosts}
          handleClosePopup={handleClosePopup}
        />
      )}
    </main>
  )
}
