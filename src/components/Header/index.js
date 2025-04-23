import Logo from "../Logo";
import OptionsHeader from "../OptionHeader";
import IconsHeader from "../IconsHeader";
import "./style.css";

function Header() {
    return (
        <header className="App-header">
            <Logo />
            <OptionsHeader />
            <IconsHeader />
        </header>
    );
}

export default Header;
