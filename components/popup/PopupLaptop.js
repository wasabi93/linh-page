import Image from "next/image";

import home from "../../styles/home.module.sass";

export default function PopupLaptop(props) {
  const { post, handleClosePopup } = props;
  return (
    <div className={home.blurContainer}>
      <div className={home.blur}>
        <div className={home.popupLaptop}>
          <div className={home.laptop}>
            <div className={home.imageContainer}>
              {post[0].link ? (
                <Image
                  src={post[0].link}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              ) : null}
            </div>
            <div className={home.description}>
              <p>{post.length !== 0 ? post[0].description : null}</p>
            </div>
          </div>
        </div>
        <div className={home.blocker} onClick={handleClosePopup}></div>
      </div>
    </div>
  );
}
