import React, { useState } from 'react';
import { BsPersonCircle, BsFillLockFill } from 'react-icons/bs';
// import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineEye, AiOutlineEyeInvisible }from 'react-icons/ai';
import '../css/Login.css';
import ImageLogin from '../images/web_illustration_dribbble_1600x1200-transformed.png';

function Login({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleModalClose = () => {
    onClose(); // Chame a função onClose para fechar o modal no componente pai
  };

  return (
    <>
      <div className="modal-overlay">
        {/* <div className='imagelogin'>
                <img src={ImageLogin} alt="image login"/>
            </div> */}
        <div className="modal">
          <button className="modal-close" onClick={handleModalClose}>
            Fechar
          </button>
          <h1>Login</h1>
          <h2>Inicie sua jornada aqui. Faça o login na sua conta.</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">
                <BsPersonCircle />
              </label>
              <input type="text" id="username" placeholder="e-mail" />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <BsFillLockFill />
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Senha"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="show-password-button"
              >
                {showPassword ? <AiOutlineEye/> : <AiOutlineEyeInvisible />}
              </button>
            </div>
            <div className='recoverandlogin'>
                <span>Esqueceu a senha?</span>
            <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
