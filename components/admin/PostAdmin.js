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
      <h1>Album: {post.album}</h1>
      <p>Name: {post.name}</p>
      {imageUrl.includes("/") ? (
        <Image src={imageUrl} alt="" height='90' width='160' />
      ) : (
        <div>** wrong image url **</div>
      )}
      <p>{moment(post.createAt).fromNow()}</p>
      <p>Position: {post.position}</p>
      <p>Like: {post.likes}</p>
      <p>Description: {post.description}</p>
      <div className={admin.postButton}>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default PostAdmin;
