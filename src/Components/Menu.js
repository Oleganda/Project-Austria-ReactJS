import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/menu.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (<header>
        <h3>Hallo Austria!</h3>
        <nav ref={navRef}>
            <a href="/#Facts">Facts</a>
            <a href="/#sliderIdSummer">Summer in Austria</a>
            <a href="/#sliderId">Winter in Austria</a>
            <a href="/#feedbackMainContId">Tipps from Locals</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
        </button>
    </header >
    );

}


export default Navbar;