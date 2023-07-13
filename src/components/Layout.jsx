/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "../assets/icons/github-icon.svg";
import InstagramIcon from "../assets/icons/instagram-icon.svg";
import LinkedlnIcon from "../assets/icons/linkedin-icon.svg";
import TwitterIcon from "../assets/icons/twitter-icon.svg";
import WhatsappIcon from "../assets/icons/whatsapp-icon.svg";

const Layout = ({ type, children }) => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date());
		}, 24 * 60 * 60 * 1000); // Setel interval ke 24 jam (1 hari)

		return () => {
			clearInterval(timer);
		};
	}, []);

	const formatDate = (date) => {
		const options = {
			weekday: "long",
			day: "numeric",
			month: "long",
			year: "numeric",
		};
		return date.toLocaleDateString("id-ID", options);
	};

	return (
		<div className="w-full min-h-screen px-5 pt-5 tablet:px-12 tablet:pt-12 lg:px-24 lg:pt-24">
			<h1 className="animate-slideInDown text-[55px] tablet:text-[112px] lg:text-[158px] font-bold uppercase text-center w-full leading-none">
				irfan hafizh
			</h1>
			<header className="animate-fadeInUp flex items-center justify-between mt-4 mb-5 tablet:mb-[50px]">
				{type === "home" ? (
					<>
						<p className="font-semibold text-primary">Pengangguran Sejati.</p>
						<Link
							to="/projects"
							className="font-semibold text-primary animate-twBounce animate-infinite"
						>
							Project Saya
						</Link>
					</>
				) : (
					<div className="flex items-center gap-2 text-primary">
						<Link to="/" className="hover:underline">
							Home
						</Link>{" "}
						/ <p className="font-bold">Projects</p>
					</div>
				)}
				<a
					href="#summary"
					className="hidden font-semibold text-primary tablet:block animate-twBounce animate-infinite"
				>
					Explore Now
				</a>
				<p className="hidden font-semibold text-primary tablet:block">
					{formatDate(date)}
				</p>
			</header>

			{children}

			<footer
				className="flex flex-col items-center justify-center my-[6.25rem] gap-5 text-center"
				data-aos="zoom-in"
			>
				<div className="flex items-center gap-5">
					<a
						href="https://twitter.com/DenGregets"
						target="_blank"
						className="transition-all duration-300 ease-in-out hover:opacity-75 hover:-translate-y-2"
						rel="noreferrer"
					>
						<img src={TwitterIcon} alt="Twitter Icon" />
					</a>
					<a
						href="https://www.instagram.com/irfanhfzh/"
						target="_blank"
						className="transition-all duration-300 ease-in-out hover:opacity-75 hover:-translate-y-2"
						rel="noreferrer"
					>
						<img src={InstagramIcon} alt="Instagram Icon" />
					</a>
					<a
						href="https://www.linkedin.com/in/irfanhfzh/"
						target="_blank"
						className="transition-all duration-300 ease-in-out hover:opacity-75 hover:-translate-y-2"
						rel="noreferrer"
					>
						<img src={LinkedlnIcon} alt="Linkedln Icon" />
					</a>
					<a
						href="https://github.com/irfanhfzh"
						target="_blank"
						className="transition-all duration-300 ease-in-out hover:opacity-75 hover:-translate-y-2"
						rel="noreferrer"
					>
						<img src={GitHubIcon} alt="GitHub Icon" />
					</a>
				</div>
				<p className="text-primary">@2023 Irfan Hafizh | All Rights Reserved</p>
			</footer>

			<div className="fixed bottom-4 right-4 animate-twBounce animate-infinite">
				<a
					href="https://wa.me/6289629933096"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={WhatsappIcon}
						alt="Whatsapp Icon"
						className="animate-zoomInDown animate-delay-1000"
					/>
				</a>
			</div>
		</div>
	);
};

export default Layout;
