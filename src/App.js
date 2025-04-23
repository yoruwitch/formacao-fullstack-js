import "./App.css";
import Logo from "./components/Logo";
import profile from "./images/perfil.svg";
import shopbag from "./images/sacola.svg";

const textOptions = ["Categories", "My booklist", "Favorites"];
const icons = [profile, shopbag];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo />
                <ul className="options">
                    {textOptions.map((text) => (
                        <li className="option">
                            <p>{text}</p>
                        </li>
                    ))}
                </ul>
                <ul className="icons">
                    {icons.map((icon) => (
                        <li>
                            <img
                                alt="Shop icon"
                                className="icon"
                                src={icon}
                            ></img>
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default App;
