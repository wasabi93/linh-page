import Image from "next/image";

import home from "../styles/home.module.sass";

import yellowOne from "../public/books/book_yellow.png";
import blueOne from "../public/books/book_blue.png";
import redOne from "../public/books/book_red.png";
import pinkOne from "../public/books/light_pink_book.png";
import yellowTwo from "../public/books/book_yellow_right.png";

export default function Books() {
  return (
    <div className={home.books}>
      <div className={home.leftBooks}>
        <div className={home.blueOne}>
          <Image src={blueOne} alt="" layout="responsive" />
        </div>
        <div className={home.yellowOne}>
          <Image src={yellowOne} alt="" layout="responsive" />
        </div>
      </div>
      <div className={home.rightBooks}>
        <div className={home.redOne}>
          <Image src={redOne} alt="" layout="responsive" />
        </div>
        <div className={home.pinkOne}>
          <Image src={pinkOne} alt="" layout="responsive" />
        </div>
        <div className={home.yellowTwo}>
          <Image src={yellowTwo} alt="" layout="responsive" />
        </div>
      </div>
    </div>
  );
}
