import logo from "../../images/logo.png";
import "./style.css";
function Logo() {
    return (
        <div className="logo">
            <img className="logo-img" src={logo} alt="Site logo"></img>
            
        </div>
    );
}

export default Logo;
