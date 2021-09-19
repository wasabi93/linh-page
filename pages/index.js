import Head from 'next/head'

import NewHP from '../components/newHP'
import home from '../styles/home.module.sass'

export default function HomePage() {
  return (
    <div className={home.container}>
      <Head>
        <title>HomePage</title>
        <meta property="og:image" content="https://media.giphy.com/media/Utrfj8quziX6XQ3Tc5/giphy.gif?cid=790b7611a03a4d5da18f9b1284c8efe61d68b9901c7f397d&rid=giphy.gif&ct=g"></meta>
        <meta property="og:image:type" content="image/jpeg"></meta>
        <meta property="og:image:width" content="200"></meta>
        <meta property="og:image:height" content="200"></meta>
      </Head>
      <NewHP />
    </div>
  )
}
