import profile from "../../images/perfil.svg";
import shopbag from "../../images/sacola.svg";
import "./style.css";

const icons = [profile, shopbag];

function IconsHeader() {
    return (
        <ul className="icons">
            {icons.map((icon) => (
                <li>
                    <img alt="Shop icon" className="icon" src={icon}></img>
                </li>
            ))}
        </ul>
    );
}

export default IconsHeader;
