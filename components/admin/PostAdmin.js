import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment";

import admin from "../../styles/admin.module.sass";

const PostAdmin = ({ post, setCurrentId }) => {
  const router = useRouter();

  const imageUrl = post.link;

  const handleDelete = async () => {
    try {
      await fetch(`/api/posts/${post._id}`, {
        method: "Delete",
      });
      router.push("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    setCurrentId(post._id);
  };

  return (
    <div className={admin.post}>
      <p className={admin.name}>Name: {post.name}</p>
      <div className={admin.imageBox}>
      {imageUrl.includes("/") ? (
        <Image src={imageUrl} alt="" height="90" width="160" />
      ) : (
        <div>** wrong image url **</div>
      )}
      </div>
      <h1 className={admin.album}>Album: {post.album}</h1>
      <div className={admin.date}>Created: {moment(post.createAt).fromNow()}</div>
      <div className={admin.position}>Position: {post.position}</div>
      <div className={admin.likes}>Like: {post.likes}</div>
      <div className={admin.description}>Description: {post.description}</div>
      <div className={admin.postButton}>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default PostAdmin;
