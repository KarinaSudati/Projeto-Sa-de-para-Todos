import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import "./globalStyle.scss";
import Footer from "./components/footer/Footer";
import SejaVoluntario from "./pages/Voluntario/voluntario";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voluntario" element={<SejaVoluntario />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
