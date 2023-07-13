import BirthdayYui from "./images/birthdayyui.png";
import BWConindo from "./images/bwconindo.png";
import MNGYProject from "./images/mngyproject.png";
import Netzwerk from "./images/netzwerkclass.png";
import TaskCode from "./images/taskcode.png";
import WarunkHorizontal from "./images/warunkhorizontal.png";

/**
 * 0 Project Bootcamp
 * 1 Project Real
 * 2 Project Fake
 * 3 Project Iseng
 */

const projectInfo = [
	{
		src: BWConindo,
		title: "BW Conindo Property",
		desc: "Website company profile yang memproduksi Loster Beton Minimalis & Modern, Ornamen GRC Krawangan, Kusen Beton, Cladding Wall, U Ditch Beton, Tutup Got, Property untuk Rumah, Gedung, Masjid, Mushola, dan lain lain.",
		technologyUsed: ["HTML", "CSS", "JavaSscript", "Bootstrap"],
		category: 3,
		sourceCode:
			"https://github.com/irfanhfzh/irfanhfzh.github.io/tree/master/bwconindo",
		linkTo: "https://irfanhfzh.github.io/bwconindo/",
	},
	{
		src: Netzwerk,
		title: "Netzwerk Class",
		desc: "Website kenang-kenangan untuk Kelas TKJ B dari Sekolah Menengah Kejuruan Panjatek di Kota Bekasi.",
		technologyUsed: ["HTML", "CSS", "JavaSscript"],
		category: 3,
		sourceCode:
			"https://github.com/irfanhfzh/irfanhfzh.github.io/tree/master/netzwerk-class",
		linkTo: "https://irfanhfzh.github.io/netzwerk-class/",
	},
	{
		src: TaskCode,
		title: "Task Code",
		desc: "Website hasil pembelajaran dibulan ke-1 dari Bootcamp Frontend Kawah Edukasi.",
		technologyUsed: ["HTML", "CSS"],
		category: 0,
		sourceCode:
			"https://github.com/irfanhfzh/irfanhfzh.github.io/tree/master/task-code",
		linkTo: "https://irfanhfzh.github.io/task-code/",
	},
	{
		src: WarunkHorizontal,
		title: "Warunk Horizontal",
		desc: "Website food order app, dimana ini adalah tugas dibulan ke-2 dari Bootcamp Frontend Kawah Edukasi, yang dikerjakan bersama tim, dimana saya menjadi Ketuanya, yang merancang, mendesain dan mengkoordinir anggota untuk mengerjakan tugas-tugasnya.",
		technologyUsed: [
			"React.js",
			"Bootstrap",
			"Ant Design",
			"Sweet Alert",
			"Framer Motion",
			"Axios",
			"Redux",
			"Immer.js",
		],
		category: 0,
		sourceCode: "https://github.com/irfanhfzh/project-food-order-app",
		linkTo: "https://irfanhfzh.github.io/food-order-app/",
	},
	{
		src: MNGYProject,
		title: "MNGY Project",
		desc: "Website semacam todo list, yang mengkonsumsi data dari API jsonplaceholder, dimana ini adalah tugas dibulan ke-3 dari Bootcamp Frontend Kawah Edukasi, sebelum nanti lanjut ke proses magang.",
		technologyUsed: ["React.js", "Bootstrap", "Axios", "Redux", "Redux Saga"],
		category: 0,
		sourceCode: "https://github.com/irfanhfzh/project-mngy",
		linkTo: "https://irfanhfzh.github.io/mngy-project/",
	},
	{
		src: BirthdayYui,
		title: "Birthday Yui",
		desc: "Website untuk menghitung mundur hari ulang tahun Yuliantika Laxmita Dewi, yang dimana jika hitung mundurnya sudah selesai akan muncul konten-konten spesial untuk ulang tahun Yuliantika Laxmita Dewi.",
		technologyUsed: ["HTML", "CSS", "JavaSscript"],
		category: 3,
		sourceCode:
			"https://github.com/irfanhfzh/irfanhfzh.github.io/tree/master/birthday-yui",
		linkTo: "https://irfanhfzh.github.io/birthday-yui/",
	},
];

export default projectInfo;
