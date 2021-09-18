import Head from 'next/head'

import NewHP from '../components/newHP'
import home from '../styles/home.module.sass'

export default function HomePage() {
  return (
    <div className={home.container}>
      <Head>
        <title>HomePage</title>
      </Head>
      <NewHP />
    </div>
  )
}
