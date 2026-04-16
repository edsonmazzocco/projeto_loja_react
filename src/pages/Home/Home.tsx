import { Link } from "react-router";

import './Home.css';

function Home() {
  return (
    <div className="container_home">
        <div className="header_home">
        <div className="header_home_texto">
            <h1>Anúncios em destaque</h1>
            <p>Encontre colecionaveis, mangás e acessórios do universo anime</p>
        </div>
            <Link to="/Anuncios">
                <button className="botao_telas_iniciais header_home_btn_azul">Quero Anunciar</button>
            </Link>
        </div>
    </div>
  )
}  

export default Home;