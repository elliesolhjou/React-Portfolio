import {Link} from "react-router-dom"


const Header = (props) =>{
    return(
        <nav>
            <Link to="/">About Me</Link>
            <Link to="/projects"> Projects</Link>
            <Link to="/skills"> Skills</Link>
            <Link to="/contact">Contact</Link>
        </nav>

    )
}


export default Header