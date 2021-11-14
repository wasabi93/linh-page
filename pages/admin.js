import Head from "next/head";
import { withAuthSync } from "../lib/auth";
import { useState, useEffect } from "react";

import Admin from "../components/Admin";
import admin from "../styles/admin.module.sass";

const adminPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch("/api/posts");
    const posts = await res.json();
    return posts.data;
  };

  useEffect(() => {
    let isMounted = true;
    getPosts()
      .then((data) => {
        if (isMounted) setPosts(data);
      })
      .catch((e) => console.log(e));
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={admin.container}>
      <Head>
        <title>Admin</title>
      </Head>
      <Admin posts={posts} />
    </div>
  );
};

export default withAuthSync(adminPage);
