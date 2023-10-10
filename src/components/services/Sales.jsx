import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
// import Swiper styles;
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Icon from '../../images/icons png/web-design.png';
// import Suport from '../../images/icons png/suport.png';
// import Virtual from '../../images/icons png/virtual.png';
// import Idea from '../../images/icons png/idea.png';
import '../../css/Services.css';

function Sales() {
    return (
      <section className="cardsales">
        <div class="card">
          <h1><AiOutlineShoppingCart /></h1><p />
          <h2>Modelo de comércio eletrônico</h2><p />
          <desc>Descubra nossos modelos de landing pages projetados especificamente para impulsionar as receitas da sua loja online e atrair uma base de clientes maior e mais engajada!</desc>
        </div>
        <div class="card">
          <h1><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#39107a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.5 9.00002H16.5M16.5 9.00002L14.5 9.00002M16.5 9.00002L16.5 7M16.5 9.00002L16.5 11" stroke="#39107a" stroke-width="1.5" stroke-linecap="round"></path> <path d="M8.96173 19.3786L9.43432 18.7963L8.96173 19.3786ZM12 5.57412L11.4522 6.08635C11.594 6.23803 11.7923 6.32412 12 6.32412C12.2077 6.32412 12.406 6.23803 12.5478 6.08635L12 5.57412ZM15.0383 19.3787L15.5109 19.961L15.0383 19.3787ZM12 21L12 20.25L12 21ZM2.65159 13.6821C2.86595 14.0366 3.32705 14.1501 3.68148 13.9358C4.03591 13.7214 4.14946 13.2603 3.9351 12.9059L2.65159 13.6821ZM6.53733 16.1707C6.24836 15.8739 5.77352 15.8676 5.47676 16.1566C5.18 16.4455 5.17369 16.9204 5.46267 17.2171L6.53733 16.1707ZM2.75 9.3175C2.75 6.41289 4.01766 4.61731 5.58602 4.00319C7.15092 3.39043 9.34039 3.82778 11.4522 6.08635L12.5478 5.06189C10.1598 2.50784 7.34924 1.70187 5.0391 2.60645C2.73242 3.50967 1.25 5.99209 1.25 9.3175H2.75ZM15.5109 19.961C17.0033 18.7499 18.7914 17.1268 20.2127 15.314C21.6196 13.5196 22.75 11.4354 22.75 9.31747H21.25C21.25 10.9289 20.3707 12.6814 19.0323 14.3884C17.7084 16.077 16.0156 17.6197 14.5657 18.7963L15.5109 19.961ZM22.75 9.31747C22.75 5.99208 21.2676 3.50966 18.9609 2.60645C16.6508 1.70187 13.8402 2.50784 11.4522 5.06189L12.5478 6.08635C14.6596 3.82778 16.8491 3.39042 18.414 4.00319C19.9823 4.6173 21.25 6.41287 21.25 9.31747H22.75ZM8.48914 19.961C9.76058 20.9928 10.6423 21.75 12 21.75L12 20.25C11.2771 20.25 10.8269 19.9263 9.43432 18.7963L8.48914 19.961ZM14.5657 18.7963C13.1731 19.9263 12.7229 20.25 12 20.25L12 21.75C13.3577 21.75 14.2394 20.9928 15.5109 19.961L14.5657 18.7963ZM3.9351 12.9059C3.18811 11.6708 2.75 10.455 2.75 9.3175H1.25C1.25 10.8297 1.82646 12.3179 2.65159 13.6821L3.9351 12.9059ZM9.43432 18.7963C8.51731 18.0521 7.49893 17.1582 6.53733 16.1707L5.46267 17.2171C6.47548 18.2572 7.53996 19.1908 8.48914 19.961L9.43432 18.7963Z" fill="#39107a"></path> </g></svg></h1><p />
          <h2>Modelo de Saúde </h2><p />
          <desc>Aproveite nossos modelos de landing pages para a área de saúde e conquiste novos clientes, apresentando sua oferta de forma clara e convincente. Nosso construtor de páginas intuitivo torna isso uma tarefa simples.</desc>
        </div>
        <div class="card">
          <h1>
          <svg
      fill="#39107a"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 300"
      enableBackground="new 0 0 300 300"
      xmlSpace="preserve"
      xmlnsElems={false} // Defina throwIfNamespace como false
    ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M279.546,39.957H20.454c-7.156,0-12.954,5.804-12.954,12.957v194.317c0,7.153,5.798,12.957,12.954,12.957 c7.153,0,12.955-5.804,12.955-12.957V65.869h68.015v6.541c-6.349,1.469-11.433,4.976-13.888,9.654H52.841 c-3.578,0-6.476,2.898-6.476,6.476v136.024c0,3.575,2.898,6.476,6.476,6.476h207.275c3.575,0,6.476-2.9,6.476-6.476V88.539 c0-3.578-2.901-6.476-6.476-6.476h-34.697c-2.453-4.679-7.537-8.186-13.889-9.654v-6.541h68.016 c7.156,0,12.954-5.802,12.954-12.955S286.702,39.957,279.546,39.957z M253.634,218.082H59.32V95.018h194.314V218.082z M198.576,72.409c-6.349,1.472-11.433,4.976-13.879,9.654H128.26c-2.449-4.679-7.533-8.183-13.882-9.654v-6.541h84.198V72.409z"></path> <path d="M86.729,179.977c-11.829,0-10.193-9.262-16.535-9.262c-2.848,0-4.917,1.992-4.917,4.843c0,5.56,6.63,12.973,21.452,12.973 c14.104,0,21.094-6.915,21.094-16.18c0-5.984-2.709-12.326-13.4-14.751l-9.76-2.208c-3.708-0.854-7.984-1.995-7.984-5.554 c0-3.569,2.993-6.064,8.408-6.064c10.904,0,9.905,7.626,15.32,7.626c2.854,0,5.347-1.704,5.347-4.626 c0-6.843-10.762-11.977-19.881-11.977c-9.905,0-20.454,4.277-20.454,15.679c0,5.489,1.927,11.334,12.546,14.04l13.18,3.349 c3.989,0.996,4.988,3.278,4.988,5.347C96.133,176.627,92.784,179.977,86.729,179.977z"></path> <path d="M117.007,188.246c2.78,0,4.416-0.931,5.205-3.207l3.064-8.554h18.812l2.99,8.554c0.856,2.276,2.712,3.207,5.276,3.207 c2.993,0,5.489-2.282,5.489-5.13c0-1.287-0.717-3.349-1.144-4.494l-14.111-39.265c-1.283-3.634-3.634-4.271-6.271-4.271h-2.78 c-2.848,0-4.7,0.924-5.699,3.559l-15.106,39.976c-0.427,1.145-1.138,3.207-1.138,4.494 C111.592,186.248,113.8,188.246,117.007,188.246z M134.751,147.769h0.146l6.624,20.596h-13.684L134.751,147.769z"></path> <path d="M170.729,187.315H195.1c3.349,0,6.055-1.707,6.055-4.914c0-3.207-2.706-4.917-6.055-4.917h-19.525v-36.556 c0-3.494-2.276-5.841-5.842-5.841s-5.845,2.347-5.845,5.841v39.549C163.888,185.679,166.6,187.315,170.729,187.315z"></path> <path d="M214.545,187.315h28.005c3.42,0,5.913-0.993,5.913-4.7c0-3.708-2.493-4.704-5.913-4.704h-23.159V165.51h19.81 c3.065,0,5.489-0.854,5.489-4.49c0-3.634-2.424-4.487-5.489-4.487h-19.81v-11.117h22.59c3.42,0,5.916-0.996,5.916-4.704 c0-3.705-2.495-4.701-5.916-4.701h-27.437c-4.131,0-6.84,1.636-6.84,6.837v37.629C207.705,185.679,210.414,187.315,214.545,187.315 z"></path> </g> </g></svg>
          </h1><p />
          <h2>Modelo Imobiliário</h2><p />
          <desc>Quer vender ou alugar uma propriedade de forma rápida e eficiente? Apresente seus principais ativos com nossos modelos de landing pages imobiliárias, fornecendo informações de contato para agilizar o processo de negociação.
          </desc>
        </div>
        <div class="card">
          <h1><svg viewBox="0 0 15 15" version="1.1" id="restaurant" xmlns="http://www.w3.org/2000/svg" fill="#39107a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="path11774" d="M3.5,0l-1,5.5c-0.1464,0.805,1.7815,1.181,1.75,2L4,14c-0.0384,0.9993,1,1,1,1s1.0384-0.0007,1-1L5.75,7.5
	c-0.0314-0.8176,1.7334-1.1808,1.75-2L6.5,0H6l0.25,4L5.5,4.5L5.25,0h-0.5L4.5,4.5L3.75,4L4,0H3.5z M12,0
	c-0.7364,0-1.9642,0.6549-2.4551,1.6367C9.1358,2.3731,9,4.0182,9,5v2.5c0,0.8182,1.0909,1,1.5,1L10,14c-0.0905,0.9959,1,1,1,1
	s1,0,1-1V0z"></path> </g></svg></h1><p />
          <h2>Modelo de Restaurante</h2><p />
          <desc>Destaque seu restaurante, cardápio e ofertas especiais com uma landing page atraente. Mostre fotos de pratos deliciosos e incentive os visitantes a fazerem pedidos online ou reservarem uma mesa.</desc>
        </div>
     </section>
    );
  }
  
  export default Sales;
  