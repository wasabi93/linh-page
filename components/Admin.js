import Link from "next/link";

import admin from "../styles/admin.module.sass";
import Post from './admin/Post'
import LoginForm from "./admin/LoginForm";

export default function Admin() {
  return (
    <div className={admin.adminContainer}>
      <header>
        <div className={admin.navbarContainer}>
          <ul>
            <li>
              <button>Board</button>
            </li>
            <li>
              <button>Books</button>
            </li>
            <li>
              <button>Note</button>
            </li>
            <li>
              <button>Photos</button>
            </li>
            <li>
              <button>Laptop</button>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className={admin.mainContainer}>
            <div className={admin.listData}>
                <Post />
            </div>
            <div className={admin.formContainer}>
                <LoginForm />
            </div>
        </div>
      </main>
    </div>
  );
}
