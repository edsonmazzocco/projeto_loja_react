// Importando os ícones do site https://react-icons.github.io/react-icons/
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from 'react-icons/ri';
import Swal from "sweetalert2";

import { useState } from "react";
import { Link, useNavigate } from "react-router";

import './Login.css';
// não precisa importa o index.css porque ele já é importado no main.tsx



function Login() {

  const navegar = useNavigate();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  async function entrar(event: React.SubmitEvent) {

    try {
        event.preventDefault();
        const resposta = await fetch("http://localhost:3000/auth/login", {
        method: "post",
        body: JSON.stringify({
          email: login,
          password: password,
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
          title: "Login realizado com sucesso !",
          text: "Agora, você poderá acessar a plataforma",
          confirmButtonText: "Tudo certo !",})
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
    <div className='container_telas_inciais'>
      <div className='container_esquerda'>
        <div className='container_texto'>
          <h2>Welcome back!</h2>
          <p>You can sign in to acess with yout existing account.</p>
        </div>
      </div>
      <form onSubmit={entrar} className='container_direita'>
        <h1>Sign In</h1>
        <div className='container_input'>
          <CiUser color='#CCC' size={20}/>
          <input type='text' placeholder='Username or email' required value={login} onChange={(e) => setLogin(e.target.value)} />
        </div>
        <div className='container_input'>
          <RiLockPasswordLine color='#CCC' size={20}/>
          <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className='botao_telas_iniciais'>Sign In</button>

        <p>New here?{" "}<Link className='link_criar_conta' to='/criar-conta'>Create an Account</Link></p>
      </form>
    </div>
  )
}

export default Login;