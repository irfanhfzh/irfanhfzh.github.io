/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PortfolioCard from "../components/PortfolioCard";
import Shape from "../components/Shape";
import { shapeData } from "../utils/shapeData";

function index() {
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

	const displayedProjects = myProjectsInfo
		?.sort((a, b) => b.id - a.id)
		?.slice(0, 3);

	return (
		<Layout type="home">
			<main>
				<section className="grid items-center justify-center grid-cols-3 tablet:grid-cols-5">
					{shapeData.map((item, idx) => {
						return (
							<div
								key={idx}
								className={
									item.type === "Shape 7" ? "hidden tablet:block" : "block"
								}
							>
								<Shape
									type={item.type}
									src={item.src}
									classname={item.classname}
								/>
							</div>
						);
					})}
				</section>

				<section
					id="summary"
					className="my-20 tablet:my-[130px] lg:my-[200px] grid grid-cols-1 lg:grid-cols-[1fr,2fr] scroll-mt-10"
				>
					<div className="animate-fadeInDown">
						<h2
							className="text-[2rem] font-bold mb-4"
							data-aos="fade-right"
							data-aos-offset={0}
						>
							Gausah kenal saya, gaguna...
						</h2>
					</div>
					<div className="animate-fadeInUp">
						<p className="text-white" data-aos="fade-left" data-aos-offset={0}>
							Selamat Datang di Website yang tidak ada gunanya ini, Perkenalakan
							nama saya Irfan Hafizh dan Saya juga bukan siapa siapa jadi ga
							guna juga saya perkenalan ya hehehe, Sebagai pengangguran sejati
							dari tahun 2020 sampai sekarang :’) <br /> <br /> Saya gatau lagi
							mau ngapain dihidup ini selain bermain Game, nonton Youtube, Makan
							dan Tidur sudah itu saja kegiatan saya selama Nganggur, diulang
							ulang terus tuh kegiatannya udah kayak Infinite Loop aja ya, Nah
							tujuan saya membuat website ini, Sebenarnya hanya untuk
							menghentikan Infinite Loop tersebut di Kehidupan Saya yang Stuck
							ini. SEMOGA SAJA...
						</p>
					</div>
				</section>

				<h1
					className="mb-10 text-4xl font-bold text-center tablet:mb-20"
					data-aos="fade-down"
					data-aos-offset={0}
				>
					Project Project Gajelas
				</h1>
				<section className="grid grid-cols-1 gap-10 tablet:grid-cols-2">
					{displayedProjects?.length === 3
						? displayedProjects?.map((item, idx) => (
								<PortfolioCard
									key={idx}
									id={idx}
									src={item.src}
									title={item.title}
									desc={item.desc}
									seeMore={item.seeMore}
									linkTo={item.linkTo}
									classname={item.classname}
									dataAos={item.dataAos}
								/>
						  ))
						: null}
					<PortfolioCard
						id={3}
						src=""
						title=""
						desc=""
						seeMore=""
						linkTo=""
						classname=""
						dataAos=""
					/>
				</section>

				<section
					className="flex flex-col items-center mt-[4.25rem] lg:mt-32 gap-5"
					data-aos="fade-up"
				>
					<h1 className="text-[2rem] lg:text-5xl uppercase font-bold">
						Mau Kolaborasi ?
					</h1>
					<p className="text-white max-w-[415px] text-center">
						Kalau saudara saudara berkenan ingin menggunakan jasa dari orang
						seperti saya ini :’) dipersilahkan saja kok, Saya sangat welcome
						akan semua insight Project-project yang ingin dibuat oleh saudara,
						dan juga tentunya dengan harga yang bersahabat.
					</p>
					<div className="flex items-center gap-2 mt-2">
						<a
							href="mailto:irfanhafizh53@gmail.com"
							className="px-4 py-3 font-bold transition-all duration-300 ease-in-out rounded-lg bg-primary hover:opacity-75"
						>
							Email Saya
						</a>
						<button className="px-4 py-3 font-bold text-white transition-all duration-300 ease-in-out rounded-lg bg-secondary hover:opacity-75">
							Download CV Saya
						</button>
					</div>
				</section>
			</main>
		</Layout>
	);
}

export default index;
