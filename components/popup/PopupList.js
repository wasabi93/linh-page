import Image from 'next/image'
import { useState, useMemo, useCallback } from 'react'

import home from '../../styles/home.module.sass'
import Popup from './Popup'

export default function PopupList(props) {
  const { posts, handleClosePopup } = props

  const [popupPost, SetPopupPost] = useState(false)
  const [position, setPosition] = useState()

  const handleOpenPopupPost = useCallback((e) => {
    e.preventDefault()
    SetPopupPost(true)
    setPosition(parseInt(e.currentTarget.getAttribute('value')))
  }, [])

  const handleClosePopupPost = useCallback(() => {
    SetPopupPost(false)
  }, [])

  const sortedPosts = useMemo(
    () => posts.sort((a, b) => a.position - b.position),
    [posts]
  )

  return (
    <>
      {!popupPost ? (
        <div className={home.blurContainer}>
          <div className={home.blur}>
            <div className={home.popupList}>
              <div className={home.listContainer}>
                <div className={home.column}>
                  {sortedPosts.length
                    ? sortedPosts
                      .filter((_, i) => i % 3 == 0)
                      .map((post) =>
                        post.link ? (
                          <div
                            className={home.post}
                            key={post._id}
                            value={post.position - 1}
                            onClick={handleOpenPopupPost}
                          >
                            <Image
                              src={post.link}
                              alt=""
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                        ) : null
                      )
                    : null}
                </div>
                <div className={home.column}>
                  {sortedPosts.length
                    ? sortedPosts
                      .slice(1)
                      .filter((_, i) => i % 3 == 0)
                      .map((post) =>
                        post.link ? (
                          <div
                            className={home.post}
                            key={post._id}
                            value={post.position - 1}
                            onClick={handleOpenPopupPost}
                          >
                            <Image
                              src={post.link}
                              alt=""
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                        ) : null
                      )
                    : null}
                </div>
                <div className={home.column}>
                  {sortedPosts.length
                    ? sortedPosts
                      .slice(2)
                      .filter((_, i) => i % 3 == 0)
                      .map((post) =>
                        post.link ? (
                          <div
                            className={home.post}
                            key={post._id}
                            value={post.position - 1}
                            onClick={handleOpenPopupPost}
                          >
                            <Image
                              src={post.link}
                              alt=""
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                        ) : null
                      )
                    : null}
                </div>
              </div>
            </div>
            <div className={home.blocker} onClick={handleClosePopup}></div>
          </div>
        </div>
      ) : null}
      {popupPost ? (
        <Popup
          posts={sortedPosts}
          popupPost={popupPost}
          position={position}
          handleClosePopupPost={handleClosePopupPost}
        />
      ) : null}
    </>
  )
}
