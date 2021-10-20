import Image from "next/image";

import home from "../../styles/home.module.sass";

import yellowOne from "../../public/stuff/books/book_yellow.png";
import blueOne from "../../public/stuff/books/book_blue.png";
import redOne from "../../public/stuff/books/book_red.png";
import pinkOne from "../../public/stuff/books/light_pink_book.png";
import yellowTwo from "../../public/stuff/books/book_yellow_right.png";

export default function Books(props) {
  const {
    handleOpenPopupBlue,
    handleOpenPopupYellow,
    handleOpenPopupPink,
    handleOpenPopupRed,
    handleOpenPopupYellowRight
  } = props
  return (
    <div className={home.books}>
      <div className={home.leftBooks}>
        <div className={home.blueOne} onClick={handleOpenPopupBlue}>
          <Image src={blueOne} alt="" layout="responsive" />
        </div>
        <div className={home.yellowOne} onClick={handleOpenPopupYellow}>
          <Image src={yellowOne} alt="" layout="responsive" />
        </div>
      </div>
      <div className={home.rightBooks} >
        <div className={home.redOne} onClick={handleOpenPopupRed}>
          <Image src={redOne} alt="" layout="responsive" />
        </div>
        <div className={home.pinkOne} onClick={handleOpenPopupPink}>
          <Image src={pinkOne} alt="" layout="responsive" />
        </div>
        <div className={home.yellowTwo} onClick={handleOpenPopupYellowRight}>
          <Image src={yellowTwo} alt="" layout="responsive" />
        </div>
      </div>
    </div>
  );
}
