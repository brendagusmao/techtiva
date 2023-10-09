import React, { useState } from 'react';
import { BsPersonCircle, BsFillLockFill } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import '../css/Login.css';

export default function Cadastro({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleModalClose = () => {
    onClose();
  };

  const handleInputFocus = (inputName) => {
    if (inputName === 'name') {
      setIsNameFocused(true);
    } else if (inputName === 'password') {
      setIsPasswordFocused(true);
    } else if (inputName === 'email') {
      setIsEmailFocused(true);
    }
  };

  const handleInputBlur = (inputName) => {
    if (inputName === 'name') {
      setIsNameFocused(false);
    } else if (inputName === 'password') {
      setIsPasswordFocused(false);
    } else if (inputName === 'email') {
      setIsEmailFocused(false);
    }
  };

  const validateEmail = (inputValue) => {
    // Implemente sua lógica de validação de e-mail aqui.
    // Retorna true se o e-mail for válido, caso contrário, retorna false.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputValue);
  };

  const validatePassword = (inputValue) => {
    // Implemente sua lógica de validação de senha aqui.
    // Por exemplo, você pode verificar se a senha contém uma letra maiúscula, números, caracteres especiais e tem um comprimento mínimo.
    // Retorna true se a senha for válida, caso contrário, retorna false.
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return regex.test(inputValue);
  };

  const validateName = (inputValue) => {
    // Implemente sua lógica de validação do nome aqui.
    // Por exemplo, você pode verificar se o nome contém pelo menos duas palavras com um espaço entre elas.
    // Retorna true se o nome for válido, caso contrário, retorna false.
    const regex = /^[\w\s]+ [\w\s]+$/;
    return regex.test(inputValue);
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsEmailValid(validateEmail(inputValue));
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
    setIsNameValid(validateName(inputValue));
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
    setIsPasswordValid(validatePassword(inputValue));
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <button type="button" className="close" title="fechar" onClick={handleModalClose}><span><AiOutlineClose /></span></button>
          <h1>Cadastre-se</h1>
          <h2>Junte-se a nós e desfrute de benefícios exclusivos.</h2>
          <form>
            <div className={`form-group ${isNameFocused ? 'focused' : ''}`}>
              <label htmlFor="name">
                <BsPersonCircle />
              </label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Nome Completo"
                onFocus={() => handleInputFocus('name')}
                onBlur={() => handleInputBlur('name')}
                onChange={handleNameChange}
              />
            </div>
            {!isNameValid && (
                <span className="error-message">Nome inválido deve conter 2 (duas) palavras</span>
              )}
            <div className={`form-group ${isEmailFocused ? 'focused' : ''}`}>
              <label htmlFor="email">
                <AiOutlineMail />
              </label>
              <input
                type="text"
                id="email"
                value={email}
                placeholder="E-mail"
                onFocus={() => handleInputFocus('email')}
                onBlur={() => handleInputBlur('email')}
                onChange={handleEmailChange}
              />
            </div>
            {!isEmailValid && (
                <span className="error-message">E-mail inválido</span>
              )}
            <div className={`form-group ${isPasswordFocused ? 'focused' : ''}`}>
              <label htmlFor="password">
                <BsFillLockFill />
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                placeholder="Senha"
                onFocus={() => handleInputFocus('password')}
                onBlur={() => handleInputBlur('password')}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="show-password-button"
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
            {!isPasswordValid && (
                <span className="error-message">A senha deve conter uma letra maiúscula, números, simbolos e no mínimo 8 caracteres</span>
              )}
            <div className="recoverandlogin">
              <button type="submit">Criar</button>
            </div>
          </form>
          
        </div>
      </div>
    </>
  );
}
