import { Link } from "react-router";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

import './Home.css';

function Home() {
  const [anuncios, setAnuncios] = useState([]);
  const [busca, setBusca] = useState('');

  //INPL (API para formatar números): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  function formatarParaReal(valor: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  }

  async function carregarAnuncios() {
  const resposta = await fetch("http://localhost:3000/anuncios");
  const dados = await resposta.json();
  setAnuncios(dados);
  }

  useEffect(() => {carregarAnuncios();}, []);

  const anunciosFiltrados = anuncios.filter((anuncio) =>
    anuncio.nome.toLowerCase().includes(busca.toLowerCase()) ||
    anuncio.descricao.toLowerCase().includes(busca.toLowerCase()) ||
    anuncio.preco.toString().includes(busca)
  );

  console.log(anunciosFiltrados);

  return (
    <div className="container_home">
        <div className="header_home">
            <div className="header_home_texto">
                <h1>Anúncios em destaque</h1>
                <p>Encontre colecionaveis, mangás e acessórios do universo anime</p>
            </div>
            <Link to="/Login">
                <button className="botao_telas_iniciais header_home_btn_azul">Quero Anunciar</button>
            </Link>
        </div>

        <div className="container_input container_input_busca">
            <BiSearch/><input type="text" placeholder="Pesquisar..." value={busca} onChange={(e) => setBusca(e.target.value)} />
        </div>

        <div className="container_cards_anuncio"> {anunciosFiltrados.map((anuncio) => (
            <div className="container_card">
                <div className="container_card_anuncio_imagem">
                    <img className="card_anuncio_imagem" src={anuncio.url} alt={anuncio.nome} />
                </div>
                <div className="container_card_informacoes">
                    <div>
                        <h2>{anuncio.nome}</h2>
                        <p className="card_informacoes_texto">{anuncio.descricao}</p>
                        <p className="card_informacoes_valor">{formatarParaReal(anuncio.preco)} </p>
                        {anuncio.parcelamento > 1 ? (
                            <p className="card_informacoes_texto">em até {anuncio.parcelamento}x de {formatarParaReal(anuncio.preco / anuncio.parcelamento)} sem juros</p>
                        ) : (
                            <p className="card_informacoes_texto">Somente à vista</p>
                        )
                        }
                    </div>
                    <a className="botao_telas_iniciais home_btn_verde" href={`https://wa.me/${anuncio.contato}?text=Olá,%20tenho%20interesse%20no%20anúncio:%20${anuncio.nome}`} target="_blank">
                        <FaWhatsapp/> Negociar
                    </a>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}  

export default Home;