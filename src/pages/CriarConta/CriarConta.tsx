import { CiUser } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from 'react-icons/ri';
import Swal from "sweetalert2";

import { useState } from "react";
import { useNavigate } from "react-router";

import './CriarConta.css';


function CriarConta() {

  //useState -> permite que vc crie uma variável de estado dentro do componente, ou seja,
  // uma variável que pode ser atualizada e que, quando atualizada, faz com que o componente
  // seja re-renderizado para refletir as mudanças.
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [plano, setPlano] = useState('');

  const navegar = useNavigate();

  
  /* Estas funções foram substituídas por uma array function direto no input
  
  function alterarNome(event) {
    setNome(event.target.value);
  }

  function alterarEmail(event) {
    setEmail(event.target.value);
  }

  function alterarSenha(event) {
    setSenha(event.target.value);
  }

   function alterarPlano(event) {
    setPlano(event.target.value);
  } */

  async function cadastrar(event: React.SubmitEvent) {
    try {
      event.preventDefault();

      const resposta = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: nome,
          password: senha,
          email: email,
          plan: plano
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (resposta.ok === false) {
        const dadosError = await resposta.json();
        throw new Error(dadosError.error);
      }

      Swal.fire({
        icon: "success",
        title: "Conta Criada",
        text: "Agora, você poderá fazer o login e desfrutar da plataforma",
        confirmButtonText: "Tudo certo !",
      });
      navegar('/login');
    } catch(error: any) {
      Swal.fire({
        icon: "error",
        title: "Opps !",
        text: error.message,
      });
    }
  }


  return (
    <div className='container_telas_inciais'>
      <div className='container_esquerda'>
        <div className='container_texto'>
          <h2>Crie sua conta!</h2>
          <p>Escolha o seu plano e comece a anunciar hoje mesmo.</p>
        </div>
      </div>
      <form onSubmit={cadastrar} className='container_direita'>
        <h1>Cadastro</h1>
        <div className='container_input'>
            <CiUser color='#CCC' size={20}/>
            <input type='text' placeholder='Nome' required value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className='container_input'>
            <MdOutlineMail color='#CCC' size={20}/>
            <input type='email' placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='container_input'>
            <RiLockPasswordLine color='#CCC' size={20}/>
            <input type='password' placeholder='Senha' required value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>

        <select className='container_select' required value={plano} onChange={(e) => setPlano(e.target.value)}>
          <option value="">Selecione um plano</option>
          <option value="Grauito">Gratuito - 10 anúncios por mês</option>
          <option value="Bronze">Bronze - 20 anúncios por mês</option>
          <option value="Prata">Prata - 50 anúncios por mês</option>
          <option value="Ouro">Ouro - anúncios ilimitados</option>
        </select>

        <button type='submit' className='botao_telas_iniciais'>Criar conta</button>
      </form>
    </div>
  )
}

export default CriarConta;