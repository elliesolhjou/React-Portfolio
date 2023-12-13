import {Link} from "react-router-dom"

const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: ".2rem solid black",
    padding: "5px 30px 0px 30px",
    width: "90%",
    margin: "auto",
    // backgroundColor: "#DAC0A3",
    // color: "white",
  };

const Header = (props) =>{
    return (
        <header style={navStyle}>
          <div className="flex items-center">
            <img src=" " alt="Logo" style={{ width: "50px" }} />
            <span className="pl-2 text-2xl font-bold text-red-600 dark:text-red-500">Ellie Solhjou</span>
          </div>
    
          <nav style={navStyle}>
            <Link to="/">
              <div><a className="navbar-brand" href="/">ABOUT</a></div>
            </Link>
            <Link to="/projects">
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