import React from "react";
import Image from "next/image";
import Audiophile from "../public/assets/icons/client-audiophile.svg";
import Databiz from "../public/assets/icons/client-databiz.svg";
import Maker from "../public/assets/icons/client-maker.svg";
import Meet from "../public/assets/icons/client-meet.svg";
import desktopImg from "../public/assets/images/image-hero-desktop.png";
import mobileImg from "../public/assets/images/image-hero-mobile.png";
import Link from "next/link";

const HeroSection = ({ fontClass }) => {
	return (
		<div className={`${fontClass} container`}>
			<div className="wrapper flex">
				<div className="l-side flex flex-col">
					<div className="text-content flex flex-col">
						<h1 className="hero-heading">Make remote work</h1>
						<p className="hero-subtitle">
							Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
							productivity soar.
						</p>
						<Link href="" className="hero-cta">
							Learn More
						</Link>
					</div>
					<div className="client-logos flex flex-between">
						<div className="client-logo">
              <Image src={Databiz} alt="Client Databiz" />
            </div>
						<div className="client-logo">
              <Image src={Audiophile} alt="Client Audiophile" />
            </div>
						<div className="client-logo">
              <Image src={Meet} alt="Client Meet" />
            </div>
						<div className="client-logo">
              <Image src={Maker} alt="Client Maker" />
            </div>
					</div>
				</div>
				<div className="r-side">
					<Image src={desktopImg} alt="Hero section image" className="hero-img__desktop" />
					<Image src={mobileImg} alt="Hero section image" className="hero-img__mobile" />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
