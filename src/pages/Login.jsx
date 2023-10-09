import React, { useState } from 'react';
import { BsPersonCircle, BsFillLockFill } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineClose} from 'react-icons/ai';
import '../css/Login.css';

function Login({ onClose, openLoginModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); // Estado para a validação do e-mail

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleModalClose = () => {
    onClose(); // Chame a função onClose para fechar o modal no componente pai
  };

  const handleInputFocus = (inputName) => {
    // Atualizar o estado do campo de entrada específico
    if (inputName === 'name') {
      setIsNameFocused(true);
    } else if (inputName === 'password') {
      setIsPhoneFocused(true);
    }
  };

  const handleInputBlur = (inputName) => {
    // Atualizar o estado do campo de entrada específico
    if (inputName === 'name') {
      setIsNameFocused(false);
    } else if (inputName === 'password') {
      setIsPhoneFocused(false);
    }
  };

  const validateEmail = (inputValue) => {
    // Expressão regular para validar e-mails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputValue);
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsValidEmail(validateEmail(inputValue)); // Verifique a validade do e-mail e atualize o estado
  };

  return (
    <>
      <div className="modal-overlay">
        {/* <div className='imagelogin'>
                <img src={ImageLogin} alt="image login"/>
            </div> */}
        <div className="modal">
        <button type="button" class="close" title="fechar" onClick={handleModalClose}><span><AiOutlineClose /></span></button>
          <h1>Login</h1>
          <h2>Inicie sua jornada aqui. Faça o login na sua conta.</h2>
          <form>
            <div className={`form-group ${isNameFocused ? 'focused' : ''}`}>
              <label htmlFor="e-mail">
                <BsPersonCircle />
              </label>
              <input
                type="text"
                id="e-mail"
                value={email}
                placeholder="e-mail"
                onFocus={() => handleInputFocus('name')}
                onBlur={() => handleInputBlur('name')}
                onChange={handleEmailChange} // Adicione um manipulador de mudança para o e-mail
              />
              {!isValidEmail && (
                <span className="error-message">E-mail inválido</span>
              )}
            </div>
            <div className={`form-group ${isPhoneFocused ? 'focused' : ''}`}>
              <label htmlFor="password">
                <BsFillLockFill />
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Senha"
                onFocus={() => handleInputFocus('password')}
                onBlur={() => handleInputBlur('password')}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="show-password-button"
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
            <div className="recoverandlogin">
              <span>
                <a href="/">Esqueceu a senha?</a>
              </span>
              <button type="submit">Entrar</button>
            </div>
          </form>
          <span className="cadastrese1">
            Ainda não tem conta? <p onClick={openLoginModal}>Cadastre-se</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default Login;
