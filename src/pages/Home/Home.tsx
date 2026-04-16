import { Link } from "react-router";
import { FaWhatsapp } from "react-icons/fa";

import anuncios from "../../../mock/data";

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

        <div className="container_cards_anuncio"> {anuncios.map((anuncio) => (
            <div className="container_card">
                <div className="container_card_anuncio_imagem">
                    <img className="card_anuncio_imagem" src={anuncio.imagem} alt={anuncio.nome} />
                </div>
                <div className="container_card_informacoes">
                    <div>
                        <h2>{anuncio.nome}</h2>
                        <p className="card_informacoes_texto">{anuncio.descricao}</p>
                        <p className="card_informacoes_valor">R$ {anuncio.valor.toFixed(2)} </p>
                        <p className="card_informacoes_texto">em até 4x de R$ {(anuncio.valor / 4).toFixed(2)} sem juros</p>
                    </div>
                    <button className="botao_telas_iniciais home_btn_verde"><FaWhatsapp />Negociar</button>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}  

export default Home;