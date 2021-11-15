import Image from 'next/image'
import { useState, useMemo, useCallback, useEffect } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdOutlineIncompleteCircle } from 'react-icons/md'

import home from '../../styles/home.module.sass'
import left from '../../public/stuff/arrow/left.png'
import right from '../../public/stuff/arrow/right.png'

const Popup = (props) => {
  const { posts, popupPost, handleClosePopup, handleClosePopupPost, position } =
    props
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    position ? setCurrent(position) : setCurrent(0)
  }, [position,setCurrent])

  const sortedPosts = useMemo(() => {
    return posts.sort((a, b) => a.position - b.position)
  }, [posts])

  const handleCurrent = useCallback((e) => {
    e.preventDefault()
    setCurrent(parseInt(e.currentTarget.getAttribute('value')))
  }, [])

  const handleCurrentUp = useCallback(() => setCurrent(current + 1), [current])

  const handleCurrentDown = useCallback(() => setCurrent(current - 1), [current])

  return (
    <div className={home.blurContainer}>
      {popupPost ? (
        <div className={home.closeButton}>
          <AiFillCloseCircle
            color="white"
            size="2em"
            onClick={handleClosePopupPost}
          />
        </div>
      ) : null}
      <div className={home.blur}>
        <div className={home.dotBar}>
          {sortedPosts.length >= 2
            ? sortedPosts.map((post, x) =>
              x === current ? (
                <div className={home.dotted} key={post._id}>
                  <MdOutlineIncompleteCircle color="white" />
                </div>
              ) : (
                <div
                  className={home.blankCircle}
                  onClick={handleCurrent}
                  key={post._id}
                  value={x}
                ></div>
              )
            )
            : null}
        </div>
        <div className={home.popup}>
          <div className={home.postContainer}>
            {sortedPosts.length ? (
              <div className={home.post}>
                <div className={home.imageContainer}>
                  {sortedPosts[current].link ? (
                    <Image
                      src={sortedPosts[current].link}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className={home.blocker} onClick={handleClosePopup}></div>
        {current !== 0 ? (
          <div className={home.leftArrow} onClick={handleCurrentDown}>
            <Image src={left} alt="" layout="responsive" />
          </div>
        ) : null}
        {current !== sortedPosts.length - 1 && sortedPosts.length >= 2 ? (
          <div className={home.rightArrow} onClick={handleCurrentUp}>
            <Image src={right} alt="" layout="responsive" />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Popup
