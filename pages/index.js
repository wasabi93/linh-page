import Head from 'next/head'
import dynamic from 'next/dynamic'

import dbConnect from '../lib/dbConnect'
import Post from '../models/Post.js'

import home from '../styles/home.module.sass'
import Loader from '../components/Loader'
const Home = dynamic(() => import('../components/Home'), {
  loading: () => <Loader />,
})

const HomePage = ({ posts }) => {
  return (
    <div className={home.container}>
      <Head>
        <title>HomePage</title>
        <meta property="og:image" content="https://imgur.com/MHcj5nH"></meta>
        <meta property="og:image:type" content="image/jpeg"></meta>
        <meta property="og:image:width" content="200"></meta>
        <meta property="og:image:height" content="200"></meta>
        <link
          rel="preload"
          href="fonts/Panton/iCielPanton-Light.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Home posts={posts} />
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

  return { props: { posts: posts } }
}

export default HomePage
