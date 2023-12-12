import {Link} from "react-router-dom"

const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: ".2rem solid black",
    padding: ".5rem",
    width: "90%",
    margin: "auto",
  };

const Header = (props) =>{
    return (
        <header>
        <h1>My Portfolio Page</h1>
        <nav style={navStyle}>
            <Link to="/">
            <div>ABOUT</div>
            </Link>
            <Link to="/skills">
            <div>SKILLS</div>
            </Link>
            <Link to="/projectlist">
            <div>PROJECTS</div>
            </Link>
            <Link to="/contact">
            <div>CONTACT</div>
            </Link>
        </nav>
        </header>
    );
}


export default Header