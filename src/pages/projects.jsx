/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PortfolioSection from "../components/PortfolioSection";

function projects() {
	const [category, setCategory] = useState("");
	const [myProjectsInfo, setMyProjectsInfo] = useState(null);

	const getMyProjectsInfo = async () => {
		await axios
			.get("https://irfanhfzh.github.io/my-projects-info/index.json")
			.then((response) => {
				setMyProjectsInfo(response?.data?.data);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getMyProjectsInfo();
	}, []);

	const myProjectsInfoByCategory =
		category === ""
			? myProjectsInfo
			: myProjectsInfo.filter((item) => item.category === category);

	const classNameActive =
		"border border-primary font-bold transition-all duration-75 ease-in-out";
	const classNameHover =
		"hover:border hover:border-primary hover:font-bold transition-all duration-75 ease-in-out";

	return (
		<Layout type="projects">
			<main>
				<nav className="flex flex-wrap gap-4 items-center justify-between border border-primary rounded-[1.25rem] px-4 py-3 text-primary custom-shadow animate-flipInX">
					<p className="text-lg font-bold">Filter Kategori :</p>
					<div className="flex flex-wrap items-center justify-center gap-4 mx-auto lg:justify-normal lg:mx-0">
						<button
							onClick={() => setCategory("")}
							className={`px-2 py-1 rounded-lg ${
								category === "" ? classNameActive : classNameHover
							}`}
						>
							Semua
						</button>
						<button
							onClick={() => setCategory("Project Bootcamp")}
							className={`px-2 py-1 rounded-lg ${
								category === "Project Bootcamp"
									? classNameActive
									: classNameHover
							}`}
						>
							Project Bootcamp
						</button>
						<button
							onClick={() => setCategory("Project Real")}
							className={`px-2 py-1 rounded-lg ${
								category === "Project Real" ? classNameActive : classNameHover
							}`}
						>
							Project Real
						</button>
						<button
							onClick={() => setCategory("Project Fake")}
							className={`px-2 py-1 rounded-lg ${
								category === "Project Fake" ? classNameActive : classNameHover
							}`}
						>
							Project Fake
						</button>
						<button
							onClick={() => setCategory("Project Iseng")}
							className={`px-2 py-1 rounded-lg ${
								category === "Project Iseng" ? classNameActive : classNameHover
							}`}
						>
							Project Iseng
						</button>
					</div>
				</nav>

				<section
					id="summary"
					className="my-[3.75rem] grid grid-cols-1 gap-10 scroll-mt-10"
				>
					{myProjectsInfoByCategory?.length === 0 ? (
						<p className="font-semibold text-center text-primary">
							Project tidak tersedia
						</p>
					) : (
						myProjectsInfoByCategory
							?.sort((a, b) => b.id - a.id)
							?.map((item, idx) => {
								return (
									<PortfolioSection
										key={idx}
										id={idx}
										src={item.src}
										title={item.title}
										desc={item.desc}
										category={item.category}
										sourceCode={item.sourceCode}
										linkTo={item.linkTo}
										technologyUsed={item.technologyUsed}
									/>
								);
							})
					)}
				</section>
			</main>
		</Layout>
	);
}

export default projects;
