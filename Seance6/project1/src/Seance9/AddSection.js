import React, { useContext, useState } from "react";
import { TodoContext } from "../App";

export default function AddSection() {
  const [content, setcontent] = useState();
  const [photo, setphoto] = useState();
  const [previewImage, setpreviewImage] = useState();
  const { list, setlist } = useContext(TodoContext);

  const handleFile = (event) => {
    const file = event.target.files[0];
    const url = window.URL.createObjectURL(file);
    setphoto(url);
    setpreviewImage(url);
  };

  const handleAjout = () => {
    const newPost = {
      contenu: content,
      photoPost: photo,
    };
    console.log({ photo });
    const newUpdatedList = [newPost, ...list];
    setlist(newUpdatedList);
    setpreviewImage();
    setphoto();
    setcontent("");
  };
  return (
    <div>
      {" "}
      <h3>Ajout de post</h3>
      <div style={{ display: "flex" }}>
        <textarea
          value={content}
          onChange={(e) => setcontent(e.target.value)}
          class="form-control form-control-lg"
          type="text"
          placeholder=".form-control-lg"
        ></textarea>
        {previewImage && (
          <div style={{ minWidth: "200px", padding: "10px" }}>
            <img alt="sdfsdf" src={previewImage} width={100} height={100} />
          </div>
        )}
      </div>
      <div class="input-group mb-3">
        <div class="custom-file">
          <input
            onChange={handleFile}
            type="file"
            class="custom-file-input"
            id="inputGroupFile02"
          />
          <label class="custom-file-label" for="inputGroupFile02">
            Choose file
          </label>
        </div>
        <div class="input-group-append">
          <span class="input-group-text" id="">
            Upload
          </span>
        </div>
        <div onClick={handleAjout} class="input-group-append">
          <span class="input-group-text" id="">
            Ajouter
          </span>
        </div>
      </div>
    </div>
  );
}
