import { Link } from "react-router";
import { useState, useEffect } from "react";

import "./Anuncios.css";

function Anuncios() {
  const [anuncios, setAnuncios] = useState([]);

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

  return (
    <div className="container_lista_anuncios">
      <h1>Meus Anúncios</h1>
      <Link to="/Anuncios/cadastro">
          <button className="botao_telas_iniciais header_home_btn_azul">Novo anúncio</button>
      </Link>

      <table className="table_anuncios">
        <thead>
          <tr>
            <th>Id</th>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Situação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {anuncios.map((anuncio) => (
            <tr key={anuncio.id}>
              <td>{anuncio.id}</td>
              <td><img width="30px" src={anuncio.url} alt={anuncio.nome} className="imagem_anuncio"/></td>
              <td>{anuncio.nome}</td>
              <td>{formatarParaReal(anuncio.preco)}</td>
              <td>{anuncio.status}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Anuncios;