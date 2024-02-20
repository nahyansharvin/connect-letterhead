import "./Navbar.css";
import Logo from "../../assets/images/Logo_wide.svg";

function Navbar() {
    return (
        <nav>
            <div className="nav-logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="nav-links"></div>
        </nav>
    );
}

export default Navbar;
