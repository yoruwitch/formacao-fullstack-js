import './style.css'

function OptionsHeader() {
    const textOptions = ["Categories", "My booklist", "Favorites"];
    return (
        <ul className="options">
            {textOptions.map((text) => (
                <li className="option">
                    <p>{text}</p>
                </li>
            ))}
        </ul>
    );
}

export default OptionsHeader;
