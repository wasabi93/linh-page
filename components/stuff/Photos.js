import Image from "next/image";

import home from "../../styles/home.module.sass";

import photoBlue from "../../public/stuff/photos/blue_photo.png";
import photoDark from "../../public/stuff/photos/dark_blue_photo.png";
import photoWall from "../../public/stuff/photos/photo_on_wall.png";
import photoPink from "../../public/stuff/photos/pink_photo.png";
import photoRed from "../../public/stuff/photos/red_photo.png";
import photoYellow from "../../public/stuff/photos/yellow_photo.png";

export default function Photos(props) {
  const {handleOpenPopup2020,handleOpenPopup2021,handleOpenPopup2019,handleOpenPopup2018,handleOpenPopup2015} = props

  return (
    <>
      <div className={home.photoBlue} onClick={handleOpenPopup2020}>
        <Image src={photoBlue} alt="" layout="responsive" />
      </div>
      <div className={home.photoDark} onClick={handleOpenPopup2019}>
        <Image src={photoDark} alt="" layout="responsive" />
      </div>
      <div className={home.photoWall}>
        <Image src={photoWall} alt="" layout="responsive" />
      </div>
      <div className={home.photoPink} onClick={handleOpenPopup2018}>
        <Image src={photoPink} alt="" layout="responsive" />
      </div>
      <div className={home.photoRed} onClick={handleOpenPopup2021}>
        <Image src={photoRed} alt="" layout="responsive" />
      </div>
      <div className={home.photoYellow} onClick={handleOpenPopup2015}>
        <Image src={photoYellow} alt="" layout="responsive" />
      </div>
    </>
  );
}
