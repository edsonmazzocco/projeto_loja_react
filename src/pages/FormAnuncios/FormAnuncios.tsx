import { LuBox } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";
import { FiDivideCircle } from "react-icons/fi";

import { useNavigate } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";

import './FormAnuncios.css'



function FormAnuncios() {

  const navegar = useNavigate();

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [contato, setContato] = useState('');
  const [imagem, setImagem] = useState('');
  const [parcelamento, setParcelamento] = useState('');

  async function cadastrarAnuncio(e: React.SubmitEvent) {

    try {
        e.preventDefault();

        const resposta = await fetch("http://localhost:3000/anuncios", {
            method: "post",
            body: JSON.stringify({
                nome: nome,
                url: imagem,
                preco: valor,
                descricao: descricao,
                parcelamento: parcelamento,
                contato: contato,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (resposta.ok === false) {
            const dadosError = await resposta.json();
            throw new Error(dadosError.error);
        } else {
                await Swal.fire({
                    icon: "success",
                    title: "Produto Cadastrado com sucesso !",
                    text: "Seu produto já está disponível para venda na plataforma",
                    confirmButtonText: "Tudo certo !",
                })
                navegar('/anuncios');
        }
    } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "Opps !",
            text: error.message,
        });
    }
  }

  return (
    <div className='container_principal'>
        <div className='container_cadastro_esquerda'>
            <div className='container_cadastro_esquerda_titulo'>
                <h1>NOVO ANÚNCIO</h1>
            </div>
            <h2>Cadastre um produto com todas as informações do body</h2>
            <span>Preencha os campos ao lado para montar um anúncio completo com nome, valor, descrição, contato, imagem e parcelamento</span>
            <div className='container_cadastro_esquerda_previa'>
                <span>PRÉVIA DO ANÚNCIO</span>
                <p>{nome}</p>
                <p>{valor}</p>
                <span>{descricao}</span>
                <span>{parcelamento}</span>
                <span>{contato}</span>
            </div>
        </div>
        <form onSubmit={cadastrarAnuncio} className='container_cadastro_direita'>
            <div className='container_cadastro_direita_linha'>
                <div className='container_cadastro_direita_item'>
                    <label>Nome</label>
                    <div className='container_input container_input_cadastro'>
                        <LuBox color='#7a4df4' size={20}/>
                        <input type='text' required value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                </div>

                <div className='container_cadastro_direita_item'>
                    <label>Valor</label>
                    <div className='container_input container_input_cadastro'>
                        <MdAttachMoney color='#7a4df4' size={22}/>
                        <input type='number' required value={valor} onChange={(e) => setValor(e.target.value)} />
                    </div>
                </div>
            </div>

            <label>Descrição</label>
            <div className='container_input container_input_cadastro_descricao'>
                <MdChatBubbleOutline color='#7a4df4' size={20}/>
                <textarea required value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            </div>

            <div className='container_cadastro_direita_linha'>
                <div className='container_cadastro_direita_item'>
                    <label>Contato</label>
                    <div className='container_input container_input_cadastro'>
                        <FaWhatsapp color='#7a4df4' size={20}/>
                        <input type='text' required value={contato} onChange={(e) => setContato(e.target.value)} />
                    </div>
                </div>

                <div className='container_cadastro_direita_item'>
                    <label>Imagem</label>
                    <div className='container_input container_input_cadastro'>
                        <IoImageOutline color='#7a4df4' size={21}/>
                        <input type='text' required value={imagem} onChange={(e) => setImagem(e.target.value)} />
                    </div>
                </div>
            </div>

            <label>Parcelamento</label>
            <div className='container_select container_input_cadastro_parcelamento'>
                <FiDivideCircle color='#7a4df4' size={20}/>
                <select required value={parcelamento} onChange={(e) => setParcelamento(e.target.value)}>
                    <option value="">Selecione a quantidade de parcelas</option>
                    <option value="1">1x</option>
                    <option value="2">2x</option>
                    <option value="3">3x</option>
                    <option value="4">4x</option>
                    <option value="5">5x</option>
                    <option value="6">6x</option>
                </select>
            </div>

            <button type='submit' className='botao_telas_iniciais botao_cadastro_anuncio'>Publicar anúncio</button>
        </form>
    </div>
  );
}

export default FormAnuncios;