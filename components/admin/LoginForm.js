import { useState } from "react";
import admin from "../../styles/admin.module.sass";

export default function LoginForm() {
  const [postData, setPostData] = useState({
    album: "",
    title: "",
    position: "",
    name: "",
    selectedFile: "",
  });
  const clear = () => {
    setPostData({
      album: "",
      title: "",
      position: "",
      name: "",
      selectedFile: "",
    });
  };
  return (
    <form autoComplete="off" noValidate className={admin.form}>
      <div className={admin.title}>Create Post</div>
      <input className={admin.input} placeholder="album..." name="album" />
      <input className={admin.input} placeholder="name..." name="name" />
      <input
        className={admin.input}
        placeholder="position..."
        name="position"
      />
      <input className={admin.input} placeholder="" name="" />
      <div className={admin.fileInput}></div>
      <button className={admin.button} type="submit">
        Submit
      </button>
      <button className={admin.button} onClick={clear}>
        Clear
      </button>
    </form>
  );
}
