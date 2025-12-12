import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SejaVoltuntario from "./pages/sejaVoluntario/SejaVoluntario";
import Header from "./components/header/Header";
import "./globalStyle.scss";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voluntario" element={<SejaVoltuntario />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
