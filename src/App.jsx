import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages";
import Projects from "./pages/projects";

function App() {
	const location = useLocation();

	useEffect(() => {
		// Mengatur posisi scroll ke atas halaman saat komponen diperbarui
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<Routes>
			<Route path="/" element={<Index />} />
			<Route path="/projects" element={<Projects />} />
		</Routes>
	);
}

export default App;
