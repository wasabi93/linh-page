import { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";

import admin from "../../styles/admin.module.sass";

export default function Form({ posts, currentId, setCurrentId }) {
  const router = useRouter();
  const contentType = "application/json";
  const [form, setForm] = useState({
    album: "",
    description: "",
    position: "",
    name: "",
    link: "",
    likes: 0,
  });

  const post = posts.filter((post) => post._id === currentId)

  const clear = useCallback(() => {
    setCurrentId(0);
    setForm({
      album: "",
      description: "",
      position: "",
      name: "",
      link: "",
      likes: 0,
    });
  }, []);

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    try {
      const res = await fetch(`/api/posts/${currentId}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();
      router.push("/admin");
      mutate(`/api/posts/${currentId}`, data, false); // Update the local data without a revalidation
    } catch (error) {
      console.log(error);
    }
  };
  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }
      router.push("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSummit = useCallback(
    (e) => {
      e.preventDefault();
      currentId === 0 ? postData(form) : putData(form);
      setCurrentId(0);
      clear();
    },
    [form]
  );

  console.log(form)

  useEffect(() => {
    if (currentId !== 0) return setForm(post[0]);
  }, [post[0]]);

  return (
    <form
      autoComplete="off"
      noValidate
      className={admin.form}
      onSubmit={handleSummit}
    >
      <div className={admin.title}>
        {currentId === 0 ? `Create Post` : `Editing ${form.name}`}
      </div>
      <label htmlFor="album">Choose an album:</label>
      <select
        id="album"
        name="album"
        className={admin.select}
        value={form.album}
        onChange={(e) => setForm({ ...form, album: e.target.value })}
      >
        <option>choose album</option>
        <option value="year2022">Year2022</option>
        <option value="year2021">Year2021</option>
        <option value="year2020">Year2020</option>
        <option value="year2019">Year2019</option>
        <option value="year2018">Year2018</option>
        <option value="year2015-17">Year2015-17</option>
        <option value="others">Others</option>
        <option value="photo1">Photo1</option>
        <option value="photo2">Photo2</option>
        <option value="photo3">Photo3</option>
        <option value="photo4">Photo4</option>
        <option value="photo5">Photo5</option>
        <option value="photoWall">Photo on wall</option>
        <option value="bookBlue">Book blue</option>
        <option value="bookYellow">Book yellow</option>
        <option value="bookRed">Book red</option>
        <option value="bookPink">Book pink</option>
        <option value="bookYellowRight">Book yellow right</option>
        <option value="laptop">Laptop</option>
        <option value="quoteNote">Note on wall</option>
        <option value="notebook">Notebook</option>
      </select>
      <input
        className={admin.input}
        type="text"
        placeholder="name..."
        name="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="number"
        className={admin.input}
        placeholder="position..."
        name="position"
        value={form.position}
        onChange={(e) => setForm({ ...form, position: e.target.value })}
      />
      <input
        className={admin.input}
        type="text"
        placeholder="description..."
        name="description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        className={admin.input}
        type="text"
        placeholder="Image-Url..."
        name="link"
        value={form.link}
        onChange={(e) => setForm({ ...form, link: e.target.value })}
      />
      <div className={admin.button}>
        <button type="submit">{currentId === 0 ? `Submit` : `Edit`}</button>
        <button type="button" onClick={clear}>
          Clear
        </button>
      </div>
    </form>
  );
}
