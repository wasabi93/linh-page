import Image from 'next/image'

import home from '../../styles/home.module.sass'

export default function PopupLaptop(props) {
  const { posts, handleClosePopup } = props
  return (
    <div className={home.blurContainer}>
      <div className={home.blur}>
        <div className={home.popupLaptop}>
          <div className={home.laptop}>
            <div className={home.imageContainer}>
              {posts[0].link ? (
                <Image
                  src={posts[0].link}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              ) : null}
            </div>
            <div className={home.description}>
              <p>{posts.length !== 0 ? posts[0].description : null}</p>
            </div>
          </div>
        </div>
        <div className={home.blocker} onClick={handleClosePopup}></div>
      </div>
    </div>
  )
}
