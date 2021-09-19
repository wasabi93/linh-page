import Head from 'next/head'

import NewHP from '../components/newHP'
import home from '../styles/home.module.sass'

export default function HomePage() {
  return (
    <div className={home.container}>
      <Head>
        <title>HomePage</title>
        <meta property="og:image" content="https://imgur.com/MHcj5nH"></meta>
        <meta property="og:image:type" content="image/jpeg"></meta>
        <meta property="og:image:width" content="200"></meta>
        <meta property="og:image:height" content="200"></meta>
      </Head>
      <NewHP />
    </div>
  )
}
