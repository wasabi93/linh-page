import { useState } from "react";

import admin from "../styles/admin.module.sass";
import PostAdmin from "./admin/PostAdmin";
import Form from "./admin/Form";

export default function Admin({ posts }) {
  const [currentId, setCurrentId] = useState(0);

  return (
    <div className={admin.adminContainer}>
      <header>
        <div className={admin.navbarContainer}>
          <ul>
            <li>
              <a href='#board'>Board</a>
            </li>
            <li>
              <a href='#books'>Books</a>
            </li>
            <li>
              <a href='#note'>Note</a>
            </li>
            <li>
              <a href='#photos'>Photos</a>
            </li>
            <li>
              <a href='#laptop'>Laptop</a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className={admin.mainContainer}>
          <div className={admin.sectionContainer}>
            <div className={admin.section}>
              <p id='board' style={{fontSize: '1.5em',color: '#3c6fdf'}}>Board</p>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Year 2022</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "year2022")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Year 2021</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "year2021")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Year 2020</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "year2020")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Year 2019</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "year2019")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Year 2018</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "year2018")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Year 2015-17</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "year2015-17")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Others</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "others")
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
              <p id='books' style={{fontSize: '1.5em',color: '#3c6fdf'}}>Books</p>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Blue book</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "bookBlue")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Yellow book</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "bookYellow")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Red book</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "bookRed")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Pink book</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "bookPink")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Yellow book in right</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "bookYellowRight")
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
              <p id='photos' style={{fontSize: '1.5em',color: '#3c6fdf'}}>Photos</p>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Portrait 2021</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "photo1")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Portrait 2020</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "photo2")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Portrait 2019</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "photo3")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Portrait 2018</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "photo4")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Portrait 2017</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "photo5")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Photo on wall</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "photoWall")
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
              <p id='note' style={{fontSize: '1.5em',color: '#3c6fdf'}}>Note</p>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Note</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "notebook")
                      .map((post) => (
                        <PostAdmin
                          post={post}
                          setCurrentId={setCurrentId}
                          key={post._id}
                        />
                      ))
                  : null}
              </div>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>Quote on wall</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "quoteNote")
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
              <p id='laptop' style={{fontSize: '1.5em',color: '#3c6fdf'}}>Laptop</p>
              <div className={admin.listData}>
                <p className={admin.dataTitle}>laptop</p>
                {posts
                  ? posts
                      .filter((post) => post.album === "laptop")
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
