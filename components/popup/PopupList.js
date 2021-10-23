import Image from "next/image";
import { useState } from "react";

import home from "../../styles/home.module.sass";
import Popup from "./Popup";

export default function PopupList(props) {
  const { posts, handleClosePopup } = props;

  const [popupPost, SetPopupPost] = useState(false);
  const [position, setPosition] = useState(0)

  // const handlePosition = (e) => {
  //   setPosition(e.target.value)
  //   console.log(position)
  // }

  const handleOpenPopupPost = (e) => {
    SetPopupPost(true);
    console.log(e.target)
  };

  const handleClosePopupPost = () => {
    SetPopupPost(false);
  };


  posts.sort((a, b) => a.position - b.position);

  return (
    <>
      {!popupPost ? (
        <div className={home.blurContainer}>
          <div className={home.blur}>
            <div className={home.popupList}>
              <div className={home.listContainer}>
                <div className={home.column}>
                  {posts.length
                    ? posts
                        .filter((_, i) => i % 3 == 0)
                        .map((post) =>
                          post.link ? (
                            <div
                              className={home.post}
                              key={post._id}
                              onClick={handleOpenPopupPost}
                            >
                              <Image
                                src={post.link}
                                alt=""
                                layout="fill"
                                objectFit="contain"
                              />
                            </div>
                          ) : null
                        )
                    : null}
                </div>
                <div className={home.column}>
                  {posts.length
                    ? posts
                        .slice(1)
                        .filter((_, i) => i % 3 == 0)
                        .map((post) =>
                          post.link ? (
                            <div
                              className={home.post}
                              key={post._id}
                              onClick={handleOpenPopupPost}
                            >
                              <Image
                                src={post.link}
                                alt=""
                                layout="fill"
                                objectFit="contain"
                              />
                            </div>
                          ) : null
                        )
                    : null}
                </div>
                <div className={home.column}>
                  {posts.length
                    ? posts
                        .slice(2)
                        .filter((_, i) => i % 3 == 0)
                        .map((post) =>
                          post.link ? (
                            <div
                              className={home.post}
                              key={post._id}
                              onClick={handleOpenPopupPost}
                            >
                              <Image
                                src={post.link}
                                alt=""
                                layout="fill"
                                objectFit="contain"
                              />
                            </div>
                          ) : null
                        )
                    : null}
                </div>
              </div>
            </div>
            <div className={home.blocker} onClick={handleClosePopup}></div>
          </div>
        </div>
      ) : null}
      {popupPost ? (
        <Popup posts={posts} popupPost={popupPost} handleClosePopupPost={handleClosePopupPost} />
      ) : null}
    </>
  );
}
