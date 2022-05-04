import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import handleClick from "./BlogDetails";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleBlog, setSingleBlog] = useState([
    {
      title: undefined,
      authorName: undefined,
      description: undefined,
    },
  ]);

  const [editedPostId, setEditedPostId] = useState(null);
  const Delete = handleClick();

  const url = `http://localhost:8000/blogs/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSingleBlog([
          {
            title: data.title,
            authorName: data.authorName,
            description: data.description,
          },
        ]);
      });
  }, []);

  const [title, setTitle] = useState(setSingleBlog.title);
  const [author, setAuthor] = useState(setSingleBlog.authorName);
  const [des, setDes] = useState(setSingleBlog.description);

  useEffect(() => {
    setTitle(setSingleBlog.title);
    setAuthor(setSingleBlog.authorName);
    setDes(setSingleBlog.description);
  }, [setSingleBlog]);

  const handleSave = async () => {
    await fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        authorName: author,
        description: des,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEditedPostId(data.id);
      });

    alert("Changes Saved");
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="container-single-blog-post">
        <div className="row">
          <div className="col-12">
            <h4>Title:</h4>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>
          <div className="col-12">
            <h4>Author:</h4>
            <input
              type="text"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            ></input>
          </div>
          <div className="col-12">
            <h4>Description</h4>
            <textarea
              value={des}
              onChange={(e) => {
                setDes(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <button className="b2" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </React.Fragment>
  );
};

export default EditBlog;
