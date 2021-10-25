import Image from "next/image";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineIncompleteCircle } from "react-icons/md";

import home from "../../styles/home.module.sass";
import left from "../../public/stuff/arrow/left.png";
import right from "../../public/stuff/arrow/right.png";

export default function Popup(props) {
  const { posts, popupPost, handleClosePopup, handleClosePopupPost, position } =
    props;
  const [current, setCurrent] = position ? useState(position) : useState(0);

  posts.sort((a, b) => a.position - b.position);

  function handleCurrent(e) {
    setCurrent(parseInt(e.currentTarget.getAttribute('value'))); 
  }

  function handleCurrentUp() {
    setCurrent(current + 1);
  }

  function handleCurrentDown() {
    setCurrent(current - 1);
  }

  return (
    <div className={home.blurContainer}>
      {popupPost ? (
        <div className={home.closeButton}>
          <AiFillCloseCircle
            color="white"
            size="2em"
            onClick={handleClosePopupPost}
          />
        </div>
      ) : null}
      <div className={home.blur}>
        <div className={home.dotBar}>
          {posts.length >= 2
            ? posts.map((post,x) =>
                x === current ? (
                  <div className={home.dotted} key={post._id} >
                    <MdOutlineIncompleteCircle color="white" />
                  </div>
                ) : (
                  <div
                    className={home.blankCircle}
                    onClick={handleCurrent}
                    key={post._id}
                    value={x}
                  ></div>
                )
              )
            : null}
        </div>
        <div className={home.popup}>
          <div className={home.postContainer}>
            {posts.length ? (
              <div className={home.post}>
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
