import logo from "../images/logo.png";
import {Link} from "react-router-dom";

export const Welcome = () => {
    return (
        <div id="start-menu">
            <img src={logo} width="250" alt="Main logo" align='center'/><br/>
            <h2>Welcome to the courses Trivia</h2>
            <Link to='/graduates'>
                <button> ss </button>
            </Link>
        </div>
    )
}