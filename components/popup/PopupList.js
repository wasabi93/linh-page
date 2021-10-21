import Image from "next/image";

import home from "../../styles/home.module.sass";

export default function PopupList(props) {
  const { posts, handleClosePopup } = props;

  posts.sort((a, b) => a.position - b.position);

  return (
    <div className={home.blurContainer}>
      <div className={home.blur}>
        <div className={home.popupList}>
          <div className={home.listContainer}>
            {posts.length ? (
              <div className={home.postsContainer}>
                <div className={home.posts}>
                  {posts.map((post) => {
                    {
                      post.link ? (
                        <div className={home.post}>
                          <Image
                            src={post.link}
                            alt=""
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      ) : null;
                    }
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className={home.blocker} onClick={handleClosePopup}></div>
      </div>
    </div>
  );
}
