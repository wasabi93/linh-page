import Image from "next/image";

import home from "../../styles/home.module.sass";

const Portrait = ({ x , posts }) => {
  const post = posts.filter((post) => post.album === `photo${x}`);

  return (
    <div className={home.portraitContainer}>
      <div className={home.portrait}>
        <div className={home.imageContainer}>
          {post.length !== 0 ? (
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
  );
};


export default Portrait;
