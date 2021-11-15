import Image from 'next/image'

import home from '../../styles/home.module.sass'

import yellowOne from '../../public/stuff/books/book_yellow.png'
import blueOne from '../../public/stuff/books/book_blue.png'
import redOne from '../../public/stuff/books/book_red.png'
import pinkOne from '../../public/stuff/books/light_pink_book.png'
import yellowTwo from '../../public/stuff/books/book_yellow_right.png'

export default function Books(props) {
  const {
    yellowBook,
    blueBook,
    redBook,
    pinkBook,
    yellowRight,
    handleOpenPopupBlue,
    handleOpenPopupYellow,
    handleOpenPopupPink,
    handleOpenPopupRed,
    handleOpenPopupYellowRight,
  } = props
  return (
    <div className={home.books}>
      <div className={home.leftBooks}>
        <div className={home.blueOne} onClick={handleOpenPopupBlue}>
          {blueBook[0] ? (
            <p className={home.tooltipText}>
              {blueBook[0].name ? blueBook[0].name : ''}
            </p>
          ) : null}
          <Image src={blueOne} alt="" layout="responsive" />
        </div>
        <div className={home.yellowOne} onClick={handleOpenPopupYellow}>
          {yellowBook[0] ? (
            <p className={home.tooltipText}>
              {yellowBook[0].name ? yellowBook[0].name : ''}
            </p>
          ) : null}
          <Image src={yellowOne} alt="" layout="responsive" />
        </div>
      </div>
      <div className={home.rightBooks}>
        <div className={home.redOne} onClick={handleOpenPopupRed}>
          {redBook[0] ? (
            <p className={home.tooltipText}>
              {redBook[0].name ? redBook[0].name : ''}
            </p>
          ) : null}
          <Image src={redOne} alt="" layout="responsive" />
        </div>
        <div className={home.pinkOne} onClick={handleOpenPopupPink}>
          {pinkBook[0] ? (
            <p className={home.tooltipText}>
              {pinkBook[0].name ? pinkBook[0].name : ''}
            </p>
          ) : null}
          <Image src={pinkOne} alt="" layout="responsive" />
        </div>
        <div className={home.yellowTwo} onClick={handleOpenPopupYellowRight}>
          {yellowRight[0] ? (
            <p className={home.tooltipText}>
              {yellowRight[0].name ? yellowRight[0].name : ''}
            </p>
          ) : null}
          <Image src={yellowTwo} alt="" layout="responsive" />
        </div>
      </div>
    </div>
  )
}
