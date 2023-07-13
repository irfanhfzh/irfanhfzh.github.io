import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

/* eslint-disable react/prop-types */
const PortfolioCard = ({ id, src, title, desc, linkTo }) => {
	return (
		<div
			className="flex flex-col items-center"
			data-aos={id % 2 === 0 ? "fade-right" : "fade-left"}
			data-aos-offset={0}
		>
			{id === 3 ? (
				<div
					className={`max-w-[350px] tablet:max-w-[335px] lg:max-w-[480px] h-[350px] tablet:h-[335px] lg:h-[480px] rounded-[1.25rem] mb-4 bg-secondary custom-bg-portfolio-4`}
					style={{ width: "-webkit-fill-available" }}
				>
					<div className="flex flex-col items-center justify-center h-[inherit]">
						<Link
							to="/projects"
							className="px-4 py-3 font-bold transition-all duration-300 ease-in-out rounded-lg hover:opacity-80 bg-primary custom-shadow"
						>
							More Project
						</Link>
					</div>
				</div>
			) : (
				<div
					className={`lg:relative group max-w-[350px] tablet:max-w-[335px] lg:max-w-[480px] h-[350px] tablet:h-[335px] lg:h-[480px] rounded-[1.25rem] animate-fadeInLeft overflow-hidden ${
						id === 0
							? "custom-bg-portfolio-1 bg-primary"
							: id === 1
							? "custom-bg-portfolio-2 bg-secondary"
							: id === 2
							? "custom-bg-portfolio-3 bg-primary"
							: ""
					}`}
					style={{ width: "-webkit-fill-available" }}
				>
					<div className="flex items-center justify-center h-[inherit] p-4 overflow-hidden lg:group-hover:blur-[2px] transition-all duration-300 ease-in-out">
						<img
							src={src}
							alt={title}
							className="overflow-hidden custom-shadow rounded-[1.25rem]"
						/>
					</div>

					<div className="flex-col items-center hidden gap-4 transition-all duration-300 ease-in-out -translate-x-1/2 lg:absolute lg:flex -translate-y-0 -top-28 left-1/2 group-hover:-translate-y-1/2 group-hover:top-1/2">
						<HashLink
							to={"/projects#" + title.split(" ").join("").toLowerCase()}
							className="px-4 py-3 font-bold transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:opacity-80 bg-primary custom-shadow"
						>
							See More
						</HashLink>
						<a
							href={linkTo}
							target="_blank"
							rel="noreferrer"
							className="px-4 py-3 font-bold text-white transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:opacity-80 bg-secondary custom-shadow"
						>
							Live Preview
						</a>
					</div>
				</div>
			)}

			<div className="mt-4 max-w-[350px] tablet:max-w-[335px] lg:max-w-[480px] h-fit">
				<h2 className="font-bold text-[2rem]">{title}</h2>
				<p className="text-white two-line-text">{desc}</p>
			</div>
			{id !== 3 ? (
				<div className="flex items-center self-start gap-4 mt-4 lg:hidden">
					<HashLink
						to={"/projects#" + title.split(" ").join("").toLowerCase()}
						className="px-4 py-3 font-bold transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:opacity-80 bg-primary custom-shadow"
					>
						See More
					</HashLink>
					<a
						href={linkTo}
						target="_blank"
						rel="noreferrer"
						className="px-4 py-3 font-bold text-white transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:opacity-80 bg-secondary custom-shadow"
					>
						Live Preview
					</a>
				</div>
			) : null}
		</div>
	);
};

export default PortfolioCard;
