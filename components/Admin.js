import { useState, useCallback } from "react";
import { logout } from "../lib/auth";
import admin from "../styles/admin.module.sass";
import PostAdmin from "./admin/PostAdmin";
import Form from "./admin/Form";

const Admin = ({ posts }) => {
  const [currentId, setCurrentId] = useState(0);
  const handleLogout = useCallback((e) => {
    e.preventDefault();
    logout()
  },[])

  return (
    <div className={admin.adminContainer}>
      <header>
        <div className={admin.navbarContainer}>
          <ul>
            <li>
              <a href="#board">Board</a>
            </li>
            <li>
              <a href="#books">Books</a>
            </li>
            <li>
              <a href="#note">Note</a>
            </li>
            <li>
              <a href="#photos">Photos</a>
            </li>
            <li>
              <a href="#laptop">Laptop</a>
            </li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </div>
      </header>
      <main>
        <div className={admin.mainContainer}>
          <div className={admin.sectionContainer}>
            <div className={admin.section}>
              <p id="board" style={{ fontSize: "1.5em", color: "#3c6fdf" }}>
                Board
              </p>
              <p className={admin.dataTitle}>Year 2022</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "year2022")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Year 2021</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "year2021")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Year 2020</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "year2020")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Year 2019</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "year2019")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Year 2018</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "year2018")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Year 2015-17</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "year2015-17")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Others</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "others")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
            </div>
            <div className={admin.section}>
              <p id="books" style={{ fontSize: "1.5em", color: "#3c6fdf" }}>
                Books
              </p>
              <p className={admin.dataTitle}>Blue book</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "bookBlue")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Yellow book</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "bookYellow")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Red book</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "bookRed")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Pink book</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "bookPink")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Yellow book in right</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "bookYellowRight")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
            </div>
            <div className={admin.section}>
              <p id="photos" style={{ fontSize: "1.5em", color: "#3c6fdf" }}>
                Photos
              </p>
              <p className={admin.dataTitle}>Portrait 2021</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "photo1")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Portrait 2020</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "photo2")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Portrait 2019</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "photo3")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Portrait 2018</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "photo4")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Portrait 2017</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "photo5")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Photo on wall</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "photoWall")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
            </div>
            <div className={admin.section}>
              <p id="note" style={{ fontSize: "1.5em", color: "#3c6fdf" }}>
                Note
              </p>
              <p className={admin.dataTitle}>Note</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "notebook")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <p className={admin.dataTitle}>Quote on wall</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "quoteNote")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
            </div>
            <div className={admin.section}>
              <p id="laptop" style={{ fontSize: "1.5em", color: "#3c6fdf" }}>
                Laptop
              </p>
              <p className={admin.dataTitle}>laptop</p>
              <div className={admin.listData}>
                {posts.length !== 0
                  ? posts
                      .filter((post) => post.album === "laptop")
                      .sort((a, b) => a.position - b.position)
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
            </div>
          </div>
          <div className={admin.formContainer}>
            <Form
              posts={posts}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          </div>
        </div>
      </main>
    </div>
  );
}


export default Admin