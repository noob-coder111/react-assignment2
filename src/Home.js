import BlogList from "./BlogList";
import useFetch from "./useFetch";

// const Home = () => {
//   let c = 0;
//   const [name, setName] = useState("Dipu");
//   const [age, setAge] = useState("20");

//   const handleClick = () => {
//     c += 1;
//     if (c % 2 == 0) {
//       setName("Deepak");
//       setAge(21);
//     } else {
//       setName("Dipu");
//       setAge(20);
//     }
//     console.log(c);
//   };
//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>
//         This is my name {name} and age {age}
//       </p>
//       <br></br>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// };

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        // <BlogList blogs={blogs} heading="BLOGS" />
        <BlogList key={blogs.id} blogs={blogs} />
      )}
    </div>
  );
};

export default Home;
