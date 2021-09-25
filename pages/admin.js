import Head from "next/head";

import Admin from '../components/Admin'
import admin from "../styles/admin.module.sass";

export default function adminPage() {
  return (
    <div className={admin.container}>
      <Head>
        <title>Admin</title>
      </Head>
      <Admin />
    </div>
  );
}
