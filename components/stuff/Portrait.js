import Image from "next/image";

import home from "../../styles/home.module.sass";

const Portrait1 = ({ posts }) => {
  const post = posts.filter((post) => post.album === "photo1");

  return (
    <div className={home.portraitContainer}>
      <div className={home.portrait}>
        <div className={home.imageContainer}>
          {post[0].link ? (
            <Image src={post[0].link} alt="" height="180" width="320" />
          ) : null}
        </div>
        <div className={home.description}>
          <p>{post[0].description ? post[0].description : null}</p>
        </div>
      </div>
    </div>
  );
};

const Portrait2 = ({ posts }) => {
  const post = posts.filter((post) => post.album === "photo2");
  return (
    <div className={home.portraitContainer}>
      <div className={home.portrait}>
        <div className={home.imageContainer}>
          {post.length !== 0 ? (
            <Image src={post[0].link} alt="" height="180" width="320" />
          ) : null}
        </div>
        <div className={home.description}>
          <p>{post.length !==0 ? post[0].description : null}</p>
        </div>
      </div>
    </div>
  );
};

const Portrait3 = ({ posts }) => {
  const post = posts.filter((post) => post.album === "photo3");
  return (
    <div className={home.portraitContainer}>
      <div className={home.portrait}>
        <div className={home.imageContainer}>
          {post.length !== 0 ? (
            <Image src={post[0].link} alt="" height="180" width="320" />
          ) : null}
        </div>
        <div className={home.description}>
          <p>{post.length !==0 ? post[0].description : null}</p>
        </div>
      </div>
    </div>
  );
};

const Portrait4 = ({ posts }) => {
  const post = posts.filter((post) => post.album === "photo4");
  return (
    <div className={home.portraitContainer}>
      <div className={home.portrait}>
        <div className={home.imageContainer}>
          {post.length !== 0 ? (
            <Image src={post[0].link} alt="" height="180" width="320" />
          ) : null}
        </div>
        <div className={home.description}>
          <p>{post.length !==0 ? post[0].description : null}</p>
        </div>
      </div>
    </div>
  );
};

const Portrait5 = ({ posts }) => {
  const post = posts.filter((post) => post.album === "photo5");
  return (
    <div className={home.portraitContainer}>
      <div className={home.portrait}>
        <div className={home.imageContainer}>
          {post.length !== 0 ? (
            <Image src={post[0].link} alt="" height="180" width="320" />
          ) : null}
        </div>
        <div className={home.description}>
          <p>{post.length !==0 ? post[0].description : null}</p>
        </div>
      </div>
    </div>
  );
};

export { Portrait1, Portrait2, Portrait3, Portrait4, Portrait5 };
