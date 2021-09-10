import Head from 'next/head'

import Home from '../components/Home'
import home from '../styles/home.module.sass'

export default function HomePage() {
  return (
    <div className={home.container}>
      <Head>
        <title>HomePage</title>
      </Head>
      <Home />
    </div>
  )
}
