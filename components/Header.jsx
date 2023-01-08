import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/images/logo.svg";
import open from "../public/assets/icons/icon-menu.svg";
import close from "../public/assets/icons/icon-close-menu.svg";
import todo from "../public/assets/icons/icon-todo.svg";
import reminders from "../public/assets/icons/icon-reminders.svg";
import planning from "../public/assets/icons/icon-planning.svg";
import calendar from "../public/assets/icons/icon-calendar.svg";
import arrowDown from "../public/assets/icons/icon-arrow-down.svg";
import arrowUp from "../public/assets/icons/icon-arrow-up.svg";

const Header = ({ fontClass }) => {
	return (
		<header className={`${fontClass}`}>
			<div className="desktop-nav">
				<div className="header-r__side">
					<Link href="/">
						<Image src={logo} alt="Logo" />
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

			<div className="mobile-nav flex flex-between">
				<Link href="/">
					<Image src={logo} alt="Logo" />
				</Link>
				<Link href="/">
					<Image src={open} alt="Logo" />
				</Link>

				<nav className="mobile-nav-items absolute">
					<div className="close-btn flex">
						<Link href="/">
							<Image src={close} alt="Logo" />
						</Link>
					</div>
					<ul className="mobile-nav-items__links">
						<li className="relative">
							<p className="">Features</p>
							<div className="drop-down__features">
								<ul className="drop-down-__features-list">
									<li className="drop-down__features-list-items">
										<Link className="drop-down__features-link flex" href="">
											<Image src={todo} alt="todo icon" />
											Todo List
										</Link>
									</li>
									<li className="drop-down__features-list-items">
										<Link className="drop-down__features-link flex" href="">
											<Image src={calendar} alt="calendar icon" />
											Calendar
										</Link>
									</li>
									<li className="drop-down__features-list-items">
										<Link className="drop-down__features-link flex" href="">
											<Image src={reminders} alt="reminders icon" />
											Reminders
										</Link>
									</li>
									<li className="drop-down__features-list-items">
										<Link className="drop-down__features-link flex" href="">
											<Image src={planning} alt="planning icon" />
											Planning
										</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className="relative">
							<p className="">Company</p>
							<div className="drop-down__company">
								<ul className="drop-down-__company-list">
									<li className="drop-down__company-list-items">
										<Link className="drop-down__company-link " href="">
											History
										</Link>
									</li>
									<li className="drop-down__company-list-items">
										<Link className="drop-down__company-link " href="">
											Our Team
										</Link>
									</li>
									<li className="drop-down__company-list-items">
										<Link className="drop-down__company-link " href="">
											Blog
										</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className="">
							<Link href="">Careers</Link>
						</li>
						<li className="">
							<Link href="">About</Link>
						</li>
					</ul>
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
