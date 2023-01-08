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
	const [isOpen, setIsOpen] = React.useState({
		features: false,
		company: false,
		nav: false,
	});
	console.log({ ...isOpen });
	const toggleFeaturesMenu = () => {
		console.log("features ", isOpen);
		setIsOpen({ ...isOpen, features: !isOpen.features });
		if (!isOpen.features) {
			document.querySelector(".drop-down__features").classList.add("show");
		} else {
			document.querySelector(".drop-down__features").classList.remove("show");
		}
	};
	const toggleCompanyMenu = () => {
		console.log("company work", isOpen);
		setIsOpen({ ...isOpen, company: !isOpen.company });
		if (!isOpen.company) {
			document.querySelector(".drop-down__company").classList.add("show");
		} else {
			document.querySelector(".drop-down__company").classList.remove("show");
		}
	};
	const toggleNavMenu = () => {
		console.log("nav work", isOpen);
		setIsOpen({ ...isOpen, nav: !isOpen.nav });
	};

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
				<Image onClick={toggleNavMenu} src={open} alt="Logo" />

				<nav className="mobile-nav-items absolute">
					<div className="close-btn flex">
						<Link onClick={toggleNavMenu} href="/">
							<Image src={close} alt="Logo" />
						</Link>
					</div>
					<ul className="mobile-nav-items__links">
						<li className="relative">
							<p onClick={toggleFeaturesMenu} className="mobile-nav__list-item flex">
								Features <Image src={isOpen.features ? arrowUp : arrowDown} alt="Logo" />
							</p>
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
							<p onClick={toggleCompanyMenu} className="mobile-nav__list-item flex">
								Company <Image src={isOpen.company ? arrowUp : arrowDown} alt="Logo" />
							</p>
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
						<li className="mobile-nav__list-item">
							<Link className="mobile-nav__link" href="">
								Careers
							</Link>
						</li>
						<li className="mobile-nav__list-item">
							<Link className="mobile-nav__link" href="">
								About
							</Link>
						</li>
					</ul>
					<div className="ctaBtn-container">
						<ul className="ctaBtn-list">
							<li className="mobile-nav__list-item">
								<Link href="">Login</Link>
							</li>
							<li className="mobile-nav__list-item">
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
