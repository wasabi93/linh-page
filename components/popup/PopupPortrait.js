import Image from "next/image";
import { useState, useEffect } from "react";

import home from "../../styles/home.module.sass";
import left from "../../public/stuff/arrow/left.png";
import right from "../../public/stuff/arrow/right.png";

export default function PopupPortrait(props) {
  const { posts, handleClosePopup } = props;
  const [current, setCurrent] = useState(0);

  posts.sort((a, b) => a.position - b.position);

  function handleCurrentUp() {
    setCurrent(current + 1);
  }

  function handleCurrentDown() {
    setCurrent(current - 1);
  }

  return (
    <div className={home.blurContainer}>
      <div className={home.blur}>
        <div className={home.popup}>
          <div className={home.portraitContainer}>
            {posts.length ? (
              <div className={home.portrait}>
                <div className={home.imageContainer}>
                  {posts[current].link ? (
                    <Image
                      src={posts[current].link}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  ) : null}
                </div>
                <div className={home.description}>
                  <p>
                    {posts[current].length !== 0
                      ? posts[current].description
                      : null}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className={home.blocker} onClick={handleClosePopup}></div>
        {current !== 0 ? (
          <div className={home.leftArrow} onClick={handleCurrentDown}>
            <Image src={left} alt="" layout="responsive" />
          </div>
        ) : null}
        {current !== posts.length - 1 && posts.length >= 2 ? (
          <div className={home.rightArrow} onClick={handleCurrentUp}>
            <Image src={right} alt="" layout="responsive" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
