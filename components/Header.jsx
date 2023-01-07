import React from "react";
import Image from "next/image";
import Link from "next/link"
import Logo from "../public/assets/images/logo.svg"

const Header = ({ fontClass }) => {
    return <header className={`${fontClass}`}>
        <div className="">
            <Link href="/">
                <Image src={Logo} alt="Logo" />
            </Link>
            
            <nav className="desktop-nav">
            
            </nav>
        </div>

        <div className="ctaBtn-container">
            <ul className="">
                <li className=""><Link href="">Login</Link></li>
                <li className=""><Link href="">Register</Link></li>
            </ul>
        </div>
        
    </header>;
};

export default Header;
