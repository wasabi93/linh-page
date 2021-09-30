import {useState} from 'react'



import admin from "../styles/admin.module.sass";
import PostAdmin from './admin/PostAdmin';
import Form from "./admin/Form";

export default function Admin({posts}) {
  const [currentId, setCurrentId] = useState(0)

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
              {posts ? posts.map((post) => (
                <PostAdmin post={post} setCurrentId={setCurrentId} key={post._id}/>
              )) : null}
            </div>
            <div className={admin.formContainer}>
                <Form posts={posts} currentId={currentId} setCurrentId={setCurrentId}/>
            </div>
        </div>
      </main>
    </div>
  );
}
