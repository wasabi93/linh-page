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
            <div className={home.column}>
              {posts.length
                ? posts.filter((_,i) => i % 3 == 0).map((post) =>
                    post.link ? (
                      <div className={home.post}>
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
                ? posts.slice(1).filter((_,i) => i % 3 == 0).map((post) =>
                    post.link ? (
                      <div className={home.post}>
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
                ? posts.slice(2).filter((_,i) => i % 3 == 0).map((post) =>
                    post.link ? (
                      <div className={home.post}>
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
  );
}
