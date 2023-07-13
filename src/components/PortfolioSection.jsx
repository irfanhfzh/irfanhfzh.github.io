/* eslint-disable react/prop-types */
const PortfolioSection = ({
	id,
	src,
	title,
	desc,
	category,
	sourceCode,
	linkTo,
	technologyUsed,
}) => {
	return (
		<>
			<div
				id={title.split(" ").join("").toLowerCase()}
				className={`grid grid-cols-1 tablet:grid-cols-[1fr,2fr] tablet:gap-10 items-center tablet:justify-between scroll-mt-10 tablet:scroll-mt-20 ${
					id % 2 === 0
						? "tablet:grid-cols-[1fr,2fr]"
						: "tablet:grid-cols-[2fr,1fr]"
				}`}
				data-aos={id % 2 === 0 ? "fade-right" : "fade-left"}
			>
				{id % 2 === 0 ? (
					<>
						<div
							className={`hidden tablet:block max-w-[350px] tablet:max-w-[335px] lg:max-w-[480px] h-[350px] tablet:h-[335px] lg:h-[480px] rounded-[1.25rem] mb-4 bg-primary custom-bg-portfolio-1`}
							style={{ width: "max-content" }}
						>
							<div className="flex flex-col items-center justify-center p-4 h-[inherit]">
								<img
									src={src}
									alt={title}
									className="overflow-hidden custom-shadow rounded-[1.25rem]"
								/>
							</div>
						</div>
						<div className="flex-col hidden gap-4 tablet:flex">
							<h2 className="font-bold text-[2rem]">{title}</h2>
							<p className="text-white">{desc}</p>
							<p className="text-white">
								Teknologi yang dipakai :{" "}
								<span className="text-lg font-bold text-primary">
									{technologyUsed.toString().split(",").join(", ")}
								</span>
							</p>
							<p className="text-white">
								Kategori :{" "}
								<span className="font-semibold text-primary">{category}</span>
							</p>
							<div className="flex items-center gap-4">
								<a
									href={sourceCode}
									target="_blank"
									className="px-4 py-2 font-bold transition-all duration-300 ease-in-out rounded-lg cursor-pointer w-fit bg-primary hover:opacity-75 hover:-translate-y-1"
									rel="noreferrer"
								>
									Source Code
								</a>
								<a
									href={linkTo}
									target="_blank"
									className="px-4 py-2 font-bold text-white transition-all duration-300 ease-in-out rounded-lg cursor-pointer w-fit bg-secondary hover:opacity-75 hover:-translate-y-1"
									rel="noreferrer"
								>
									Live Preview
								</a>
							</div>
						</div>
					</>
				) : (
					<>
						<div className="flex-col hidden gap-4 tablet:flex">
							<h2 className="font-bold text-[2rem]">{title}</h2>
							<p className="text-white">{desc}</p>
							<p className="text-white">
								Teknologi yang dipakai :{" "}
								<span className="text-lg font-bold text-primary">
									{technologyUsed.toString().split(",").join(", ")}
								</span>
							</p>
							<p className="text-white">
								Kategori :{" "}
								<span className="font-semibold text-primary">{category}</span>
							</p>
							<div className="flex items-center gap-4">
								<a
									href={sourceCode}
									target="_blank"
									className="px-4 py-2 font-bold transition-all duration-300 ease-in-out rounded-lg cursor-pointer w-fit bg-primary hover:opacity-75 hover:-translate-y-1"
									rel="noreferrer"
								>
									Source Code
								</a>
								<a
									href={linkTo}
									target="_blank"
									className="px-4 py-2 font-bold text-white transition-all duration-300 ease-in-out rounded-lg cursor-pointer w-fit bg-secondary hover:opacity-75 hover:-translate-y-1"
									rel="noreferrer"
								>
									Live Preview
								</a>
							</div>
						</div>
						<div
							className={`hidden tablet:block max-w-[350px] tablet:max-w-[335px] lg:max-w-[480px] h-[350px] tablet:h-[335px] lg:h-[480px] rounded-[1.25rem] mb-4 bg-secondary custom-bg-portfolio-2`}
							style={{ width: "max-content" }}
						>
							<div className="flex flex-col items-center justify-center p-4 h-[inherit]">
								<img
									src={src}
									alt={title}
									className="overflow-hidden custom-shadow rounded-[1.25rem]"
								/>
							</div>
						</div>
					</>
				)}

				{/* Mobile Devices */}
				<>
					<div
						className={`block tablet:hidden max-w-[350px] tablet:max-w-[335px] lg:max-w-[480px] h-[350px] tablet:h-[335px] lg:h-[480px] rounded-[1.25rem] mb-4 ${
							id % 2 === 0
								? "bg-primary custom-bg-portfolio-1"
								: "bg-secondary custom-bg-portfolio-2"
						}`}
						style={{ width: "max-content" }}
					>
						<div className="flex flex-col items-center justify-center p-4 h-[inherit]">
							<img
								src={src}
								alt={title}
								className="overflow-hidden custom-shadow rounded-[1.25rem]"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-4 tablet:hidden">
						<h2 className="font-bold text-[2rem]">{title}</h2>
						<p className="text-white">{desc}</p>
						<p className="text-white">
							Teknologi yang dipakai :{" "}
							<span className="text-lg font-bold text-primary">
								{technologyUsed.toString().split(",").join(", ")}
							</span>
						</p>
						<p className="text-white">
							Kategori :{" "}
							<span className="font-semibold text-primary">{category}</span>
						</p>
						<div className="flex items-center gap-4">
							<a
								href={sourceCode}
								target="_blank"
								className="px-4 py-2 font-bold transition-all duration-300 ease-in-out rounded-lg cursor-pointer w-fit bg-primary hover:opacity-75 hover:-translate-y-1"
								rel="noreferrer"
							>
								Source Code
							</a>
							<a
								href={linkTo}
								target="_blank"
								className="px-4 py-2 font-bold text-white transition-all duration-300 ease-in-out rounded-lg cursor-pointer w-fit bg-secondary hover:opacity-75 hover:-translate-y-1"
								rel="noreferrer"
							>
								Live Preview
							</a>
						</div>
					</div>
				</>
				{/* Mobile Devices */}
			</div>
		</>
	);
};

export default PortfolioSection;
