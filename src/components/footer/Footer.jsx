import Logo from "../../assets/logo.png";
import LogoEmail from "../../assets/icon-email.png";
import LogoTel from "../../assets/icon-tel.png";
import LogoLoc from "../../assets/icon-loc.png";
import { Link } from "react-router-dom";
import S from "./footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={S.boxFooter}>
        <img src={Logo} alt="logo do site, coração verde" />
        <Link to="/">Médicos & Dentista</Link>
        <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        <ul>
          <h4>Contato</h4>
          <li>
            <div>
              <img src={LogoEmail} alt="ícone do email" />
              <p>contato@medico-dentista.org</p>
            </div>
          </li>
          <li>
            <div>
              <img src={LogoTel} alt="ícone de telefone" />
              <p>(11)3000-0000</p>
            </div>
          </li>
          <li>
            <div>
              <img src={LogoLoc} alt="ícone de localização" />
              <p>São Paulo, Brasil</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="columFooter">
        <h3>Redes Sociais</h3>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div className="bottomFooter">
        <p>
          © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
