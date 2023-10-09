import React, { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { BsFillTelephoneFill, BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import '../css/About.css';
import Nav2 from '../components/navegation/Nav2';
import Footer from './Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    message: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isSelectFocused, setIsSelectFocused] = useState(false);

  const handleInputFocus = (inputName) => {
    // Atualizar o estado do campo de entrada específico
    if (inputName === 'name') {
      setIsNameFocused(true);
    } else if (inputName === 'phone') {
      setIsPhoneFocused(true);
    } else if (inputName === 'email') {
      setIsEmailFocused(true);
    } else if (inputName === 'select') {
      setIsSelectFocused(true);
    }
  };

  const handleInputBlur = (inputName) => {
    // Atualizar o estado do campo de entrada específico
    if (inputName === 'name') {
      setIsNameFocused(false);
    } else if (inputName === 'phone') {
      setIsPhoneFocused(false);
    } else if (inputName === 'email') {
      setIsEmailFocused(false);
    } else if (inputName === 'select') {
      setIsSelectFocused(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Envie os dados do formulário para o servidor ou faça qualquer ação necessária aqui.
    console.log(formData);
  };

    return  (
      <>
        <Nav2 />
        <section className='contact'> 
        <span className='contactsidebar'><h1>
            Entre em contato</h1>
            <p>Estamos ansiosos para ouvir de você! Entre em contato conosco e teremos o prazer de ajudar.</p>
            <section>
              <p><i><BsFillTelephoneFill /></i> +55 31 9 9999-9999</p>
            <p><i><HiOutlineMail/></i> email@email.com</p>
            </section>
        </span>
        <span className='contactform'>
        <form className="contact-form" onSubmit={handleSubmit}>
      <div className={`form__group ${isNameFocused ? 'focused' : ''}`}>
        <i><CiUser /></i>
        <input
          type="input"
          placeholder="Nome"
          required
          onFocus={() => handleInputFocus('name')}
          onBlur={() => handleInputBlur('name')}
        />
      </div>
      <div className="input-inline">
        <div className={`form__group ${isPhoneFocused ? 'focused' : ''}`}>
          <i><BsTelephone /></i>
          <input
            type="input"
            placeholder="Telefone"
            required
            onFocus={() => handleInputFocus('phone')}
            onBlur={() => handleInputBlur('phone')}
          />
        </div>
        <div className={`form__group ${isEmailFocused ? 'focused' : ''}`}>
          <i><HiOutlineMail /></i>
          <input
            type="input"
            placeholder="E-mail"
            required
            onFocus={() => handleInputFocus('email')}
            onBlur={() => handleInputBlur('email')}
          />
        </div>
      </div>
      <div className="form__select">
      <label htmlFor="reason">Motivo do Contato</label>
        <select
          onFocus={() => handleInputFocus('select')}
          onBlur={() => handleInputBlur('select')}
          value={formData.reason}
          onChange={handleInputChange}
          required
        >
          <option value="">Selecione um motivo</option>
          <option value="Orçamento Personalizado" className="custom-option" >Orçamento Personalizado</option>
          <option value="Dúvidas">Dúvidas</option>
          <option value="Reclamações">Reclamações</option>
          <option value="Elogios">Elogios</option>
        </select>
      </div>
      <div className="form__select textarea">
      <label htmlFor="reason">Mensagem</label>
      <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        </div>
        <button>enviar</button>
    </form>
        </span>
        </section>
        <Footer />
      </>
    )
}
  
export default Contact;