import Image from 'next/image'
import moment from 'moment'
import { useState, useMemo, useCallback } from 'react'

import admin from '../../styles/admin.module.sass'

const PostAdmin = ({ post, setCurrentId }) => {
  const [popupDelete, setPopupDelete] = useState(false)

  const imageUrl = useMemo(() => post.link, [post])

  const handlePopupDelete = useCallback(() => {
    setPopupDelete(!popupDelete)
  }, [popupDelete])

  const handleDelete = async () => {
    try {
      await fetch(`/api/posts/${post._id}`, {
        method: 'Delete',
      })
    } catch (error) {
      console.log(error)
    }
    setPopupDelete(!popupDelete)
  }

  const handleEdit = useCallback(() => setCurrentId(post._id), [setCurrentId,post])

  return (
    <div className={admin.post}>
      <p className={admin.name}>Name: {post.name}</p>
      <div className={admin.imageBox}>
        {imageUrl.includes('/') ? (
          <Image src={imageUrl} alt="" height="90" width="160" />
        ) : (
          <div>** wrong image url **</div>
        )}
      </div>
      <h1 className={admin.album}>Album: {post.album}</h1>
      <div className={admin.position}>Position: {post.position}</div>
      <div className={admin.likes}>Like: {post.likes}</div>
      <div className={admin.date}>
        Created at: {moment(post.createAt).fromNow()}
      </div>
      <div className={admin.description}>Description: {post.description}</div>
      <div className={admin.postButton}>
        <button onClick={handlePopupDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
      {popupDelete ? (
        <div className={admin.blurContainer}>
          <div className={admin.blur}>
            <div className={admin.popup}>
              <p>Ché chắc chứ???</p>
              <p>Xóa hình name:{post.name} nhóe???</p>
              <div className={admin.buttonPopup}>
                <button onClick={handleDelete}>Yes</button>
                <button onClick={handlePopupDelete}>No</button>
              </div>
            </div>
            <div className={admin.blocker} onClick={handlePopupDelete}></div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default PostAdmin
