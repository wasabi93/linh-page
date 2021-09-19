import Image from "next/image";

import home from "../styles/home.module.sass";

import photoBlue from "../public/photos/blue_photo.png";
import photoDark from "../public/photos/dark_blue_photo.png";
import photoWall from "../public/photos/photo_on_wall.png";
import photoPink from "../public/photos/pink_photo.png";
import photoRed from "../public/photos/red_photo.png";
import photoYellow from "../public/photos/yellow_photo.png";

export default function Photos() {
  return (
    <>
      <div className={home.photoBlue}>
        <Image src={photoBlue} alt="" layout="responsive" />
      </div>
      <div className={home.photoDark}>
        <Image src={photoDark} alt="" layout="responsive" />
      </div>
      <div className={home.photoWall}>
        <Image src={photoWall} alt="" layout="responsive" />
      </div>
      <div className={home.photoPink}>
        <Image src={photoPink} alt="" layout="responsive" />
      </div>
      <div className={home.photoRed}>
        <Image src={photoRed} alt="" layout="responsive" />
      </div>
      <div className={home.photoYellow}>
        <Image src={photoYellow} alt="" layout="responsive" />
      </div>
    </>
  );
}
