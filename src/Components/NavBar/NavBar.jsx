import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    const imgLogo = "https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png"
    return(
        <header>
            <img className="imgLogo" src={imgLogo} alt="ADIDOS" />
            <nav>
                <ul>
                    <li>Hombre</li>
                    <li>Mujer</li>
                    <li>Niños</li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
};

export default NavBar;