import Image from "next/image";

import home from "../styles/home.module.sass";
import year2015 from "../public/board/15-17.png";
import year2018 from "../public/board/2018.png";
import year2019 from "../public/board/2019.png";
import year2020 from "../public/board/2020.png";
import year2021 from "../public/board/2021.png";
import year2022 from "../public/board/2022.png";
import yearOthers from "../public/board/others.png";

export default function Board() {
  return (
    <div className={home.board}>
      <div className={home.bgBoard}>
        <div className={home.year2022}>
          <Image src={year2022} alt="" layout="responsive" />
        </div>
        <div className={home.year2018}>
          <Image src={year2018} alt="" layout="responsive" />
        </div>
        <div className={home.year2021}>
          <Image src={year2021} alt="" layout="responsive" />
        </div>
        <div className={home.year2020}>
          <Image src={year2020} alt="" layout="responsive" />
        </div>
        <div className={home.year2019}>
          <Image src={year2019} alt="" layout="responsive" />
        </div>
        <div className={home.year2015}>
          <Image src={year2015} alt="" layout="responsive" />
        </div>
        <div className={home.yearOthers}>
          <Image src={yearOthers} alt="" layout="responsive" />
        </div>
      </div>
    </div>
  );
}
