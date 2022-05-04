import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notFound">
            <h2>Sorry</h2>
            <p>The page couldn't be found</p>
            <Link to='/'>Back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;