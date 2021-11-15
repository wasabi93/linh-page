import Image from 'next/image'

import home from '../../styles/home.module.sass'

import photoBlue from '../../public/stuff/photos/blue_photo.png'
import photoDark from '../../public/stuff/photos/dark_blue_photo.png'
import photoWall from '../../public/stuff/photos/photo_on_wall.png'
import photoPink from '../../public/stuff/photos/pink_photo.png'
import photoRed from '../../public/stuff/photos/red_photo.png'
import photoYellow from '../../public/stuff/photos/yellow_photo.png'

export default function Photos(props) {
  const {
    handleOpenPopupPhoto1,
    handleOpenPopupPhoto2,
    handleOpenPopupPhoto3,
    handleOpenPopupPhoto4,
    handleOpenPopupPhoto5,
    handleOpenPopupOnWall
  } = props

  return (
    <>
      <div className={home.photoBlue} onClick={handleOpenPopupPhoto2}>
        <Image src={photoBlue} alt="" layout="responsive" />
      </div>
      <div className={home.photoDark} onClick={handleOpenPopupPhoto3}>
        <Image src={photoDark} alt="" layout="responsive" />
      </div>
      <div className={home.photoWall} onClick={handleOpenPopupOnWall}>
        <Image src={photoWall} alt="" layout="responsive" />
      </div>
      <div className={home.photoPink} onClick={handleOpenPopupPhoto4}>
        <Image src={photoPink} alt="" layout="responsive" />
      </div>
      <div className={home.photoRed} onClick={handleOpenPopupPhoto1}>
        <Image src={photoRed} alt="" layout="responsive" />
      </div>
      <div className={home.photoYellow} onClick={handleOpenPopupPhoto5}>
        <Image src={photoYellow} alt="" layout="responsive" />
      </div>
    </>
  )
}
