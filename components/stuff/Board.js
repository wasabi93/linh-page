import Image from "next/image";

import home from "../../styles/home.module.sass";
import year2015 from "../../public/stuff/board/15-17.png";
import year2018 from "../../public/stuff/board/2018.png";
import year2019 from "../../public/stuff/board/2019.png";
import year2020 from "../../public/stuff/board/2020.png";
import year2021 from "../../public/stuff/board/2021.png";
import year2022 from "../../public/stuff/board/2022.png";
import yearOthers from "../../public/stuff/board/others.png";

export default function Board(props) {
  const {
    handleOpenPopup2022,
    handleOpenPopup2021,
    handleOpenPopup2020,
    handleOpenPopup2019,
    handleOpenPopup2018,
    handleOpenPopup2015,
    handleOpenPopupOther,
  } = props;
  return (
    <div className={home.board}>
      <div className={home.bgBoard}>
        <div className={home.year2022} onClick={handleOpenPopup2022}>
          <Image src={year2022} alt="" layout="responsive" />
        </div>
        <div className={home.year2018} onClick={handleOpenPopup2018}>
          <Image src={year2018} alt="" layout="responsive" />
        </div>
        <div className={home.year2021} onClick={handleOpenPopup2021}>
          <Image src={year2021} alt="" layout="responsive" />
        </div>
        <div className={home.year2020} onClick={handleOpenPopup2020}>
          <Image src={year2020} alt="" layout="responsive" />
        </div>
        <div className={home.year2019} onClick={handleOpenPopup2019}>
          <Image src={year2019} alt="" layout="responsive" />
        </div>
        <div className={home.year2015} onClick={handleOpenPopup2015}>
          <Image src={year2015} alt="" layout="responsive" />
        </div>
        <div className={home.yearOthers} onClick={handleOpenPopupOther}>
          <Image src={yearOthers} alt="" layout="responsive" />
        </div>
      </div>
    </div>
  );
}
