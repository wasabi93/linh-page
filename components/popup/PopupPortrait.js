import Image from "next/image";
import { useState, useMemo, useCallback } from "react";

import home from "../../styles/home.module.sass";
import left from "../../public/stuff/arrow/left.png";
import right from "../../public/stuff/arrow/right.png";

export default function PopupPortrait(props) {
  const { posts, handleClosePopup } = props;
  const [current, setCurrent] = useState(0);

  const sortedPosts = useMemo(
    () => posts.sort((a, b) => a.position - b.position),
    []
  );

  const handleCurrentUp = useCallback(() => setCurrent(current + 1), []);

  const handleCurrentDown = useCallback(() => setCurrent(current - 1), []);

  return (
    <div className={home.blurContainer}>
      <div className={home.blur}>
        <div className={home.popup}>
          <div className={home.portraitContainer}>
            {sortedPosts.length ? (
              <div className={home.portrait}>
                <div className={home.imageContainer}>
                  {sortedPosts[current].link ? (
                    <Image
                      src={sortedPosts[current].link}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  ) : null}
                </div>
                <div className={home.description}>
                  <p>
                    {sortedPosts[current].length !== 0
                      ? sortedPosts[current].description
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
        {current !== sortedPosts.length - 1 && sortedPosts.length >= 2 ? (
          <div className={home.rightArrow} onClick={handleCurrentUp}>
            <Image src={right} alt="" layout="responsive" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
