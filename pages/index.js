import Head from 'next/head'

import dbConnect from '../lib/dbConnect'
import Post from '../models/Post.js'

import NewHP from '../components/newHP'
import home from '../styles/home.module.sass'

const HomePage = ({posts}) => {
  return (
    <div className={home.container}>
      <Head>
        <title>HomePage</title>
        <meta property="og:image" content="https://imgur.com/MHcj5nH"></meta>
        <meta property="og:image:type" content="image/jpeg"></meta>
        <meta property="og:image:width" content="200"></meta>
        <meta property="og:image:height" content="200"></meta>
      </Head>
      <NewHP posts={posts}/>
    </div>
  )
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

export default HomePage