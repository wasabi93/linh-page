import Head from "next/head";

import dbConnect from '../lib/dbConnect'
import Post from '../models/Post.js'

import Admin from '../components/Admin'
import admin from "../styles/admin.module.sass";

const adminPage = ({posts}) => {
  return (
    <div className={admin.container}>
      <Head>
        <title>Admin</title>
      </Head>
      <Admin posts={posts}/>
    </div>
  );
}

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Post.find({})
  const posts = result.map((doc) => {
    const post = doc.toObject()
    post._id = post._id.toString()
    return post
  })

  return { props: { posts: posts} }
}

export default adminPage
