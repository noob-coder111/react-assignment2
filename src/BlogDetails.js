import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import './index.css'

const BlogDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };

  const handleEdit = () => {
    navigate(`/blogs/edit/${blog.id}`);
  };

  return (
    <div className="blog-details">
      <h1>Blog Details- {id}</h1>
      <br/>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>Title : {blog.title}</h2>
          <h2>Author Name : {blog.authorName}</h2>
          <h2>Description : {blog.description}</h2>
          <br/>
          <button className="btn" onClick={handleClick}>Delete</button>
          <button className="btn" onClick={handleEdit}>Edit</button>
        </article>
      )}

    </div>
  );
};

export default BlogDetails;
