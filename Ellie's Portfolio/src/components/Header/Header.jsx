import {Link} from "react-router-dom"
import ESLogo from "../../assets/ES.jpg";

// const navStyle = {
//     display: "flex",
//     justifyContent: "space-around",
//     // padding: "5px 30px 0px 30px",
//     width: "90%",
//     // margin: "auto",
//     // backgroundColor: "#DAC0A3",
//     // color: "white",
//   };

const Header = (props) => {
    return (
        <header className="flex">
            <div className="flex items-center">
                
                <img src={ESLogo} alt="Logo" style={{ width: "80px" }} />
                <div className="col-span-8">
                    <h4 className="pl-1 text-2xl font-bold text-red-600 dark:text-red-500 underline decoration-wavy">Ellie&nbsp;Solhjou</h4>
                </div>
                <nav className="flex justify-end"> 
                    <Link to="/">
                        <div className="flex-initial grow hover:grow-0 w-64">ABOUT</div>
                    </Link>
                    <Link to="/projects">
                        <div className="flex-initial grow hover:grow-0 w-64">PROJECTS</div>
                    </Link>
                    <Link to="/contact">
                        <div className="flex-initial grow hover:grow-0 w-64">CONTACT</div>
                    </Link>
                </nav>
            </div>
        </header>
    );
}





export default Header