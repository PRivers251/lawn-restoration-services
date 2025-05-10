import { FaArrowDown } from "react-icons/fa6";
import Image from "next/image";
import "./header-styles.css";

export default function Header() {

    function onClick() {}

    return (
        <header className="header">

            <div className="header-cta-1">
                TAP TO CALL! - ###.###.####
            </div>

            <div className="logo-container">
                <Image
                    src="/images/lawn-restoration-logo.png"
                    alt="Lawn Care Logo"
                    className="logo"
                    width={200}
                    height={200}
                />
            </div>

            <div className="down-slider-button">
                <FaArrowDown />
            </div>
            
        </header>
    );
}
    
