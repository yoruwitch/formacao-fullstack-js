import "./App.css";
import IconsHeader from "./components/IconsHeader";
import Logo from "./components/Logo";
import OptionsHeader from "./components/OptionHeader";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo />
                <OptionsHeader />
                <IconsHeader />
            </header>
        </div>
    );
}

export default App;
