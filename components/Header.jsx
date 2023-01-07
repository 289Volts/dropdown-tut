import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/images/logo.svg";
import Open from "../public/assets/icons/icon-menu.svg";
import Close from "../public/assets/icons/icon-close-menu.svg";

const Header = ({ fontClass }) => {
	return (
		<header className={`${fontClass}`}>
			<div className="desktop-nav">
				<div className="header-r__side">
					<Link href="/">
						<Image src={Logo} alt="Logo" />
					</Link>
					<nav className="desktop-nav-items"></nav>
				</div>
				<div className="ctaBtn-container">
					<ul className="">
						<li className="">
							<Link href="">Login</Link>
						</li>
						<li className="">
							<Link href="">Register</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="mobile-nav flex flex-between reltive">
				<Link href="/">
					<Image src={Logo} alt="Logo" />
				</Link>
				<Link href="/">
					<Image src={Open} alt="Logo" />
				</Link>

				<nav className="mobile-nav-items absolute">
					<div className="close-btn flex">
						<Link href="/">
							<Image src={Close} alt="Logo" />
						</Link>
					</div>
					<div className="ctaBtn-container">
						<ul className="">
							<li className="">
								<Link href="">Login</Link>
							</li>
							<li className="">
								<Link href="">Register</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
