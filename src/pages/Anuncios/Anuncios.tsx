import "./Anuncios.css";

const anuncios = [
  {
    id: 1,
    nome: "Action Figure Mago negro",
    imagem:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRHo7RAAzD8EwbZWIixDNTlCpFi2k0095r1TJsKnCq2UM9V8fq6XWP3-fhiH78GK5fwYaf3HVYqZdbfHNrafnUtSrWQnjsfN9-6Q66mn8kH-h3F8hNcZcTk7RM",
    valor: 350,
    situacao: "PUBLICADO",
    descricao: ".............",
  },
  {
    id: 2,
    nome: "Headset Gamer HyperSound X",
    imagem:
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600&q=80",
    valor: 280,
    situacao: "PUBLICADO",
    descricao: "Headset com microfone removivel e som 7.1",
  },
  {
    id: 3,
    nome: "Teclado Mecanico RGB Falcon",
    imagem:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80",
    valor: 420,
    situacao: "PUBLICADO",
    descricao: "Switch blue, iluminacao RGB e cabo USB-C",
  },
  {
    id: 4,
    nome: "Mouse Sem Fio Nitro Pro",
    imagem:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
    valor: 190,
    situacao: "NAO_PUBLICADO",
    descricao: "Mouse ergonomico com sensor de alta precisao",
  },
  {
    id: 5,
    nome: "Monitor 24 Polegadas Full HD",
    imagem:
      "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=600&q=80",
    valor: 980,
    situacao: "PUBLICADO",
    descricao: "Painel IPS, 75Hz e entradas HDMI/DisplayPort",
  },
];


function Anuncios() {

  //INPL (API para formatar números): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  function formatarParaReal(valor: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  }

  return (
    <div className="container_lista_anuncios">
      <h1>Meus anúncios</h1>

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
              <td><img width="30px" src={anuncio.imagem} alt={anuncio.nome} className="imagem_anuncio"/></td>
              <td>{anuncio.nome}</td>
              <td>{formatarParaReal(anuncio.valor)}</td>
              <td>{anuncio.situacao}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Anuncios;