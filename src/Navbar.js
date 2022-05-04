import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blogs Hub</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};
export default Navbar;
