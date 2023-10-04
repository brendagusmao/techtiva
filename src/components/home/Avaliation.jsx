import React, {useContext} from 'react';
import {AiFillStar} from 'react-icons/ai';
import {BsCheckLg, BsFillArrowRightCircleFill} from 'react-icons/bs';
import {MdArrowDropDown} from 'react-icons/md';
import '../../css/Avaliation.css';
import { UserOutlined } from '@ant-design/icons';
import MyContext from '../../context/MyContext';
import { Avatar } from 'antd';
const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

function Avaliation() {
  const {className} = useContext(MyContext);
  return (
    <>
    <div className='Avaliation'>
    <h1> O que nossos clientes dizem</h1>
      <section className="maincard">
        <div className={className ? 'card-avaliacao' : 'card-avaliacao'}>
          <div className="estrelas">
          <span><AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar /></span>
          <AiFillStar />
          </div>
          <div className="descricao">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut vestibulum leo. Vestibulum congue ante ligula, ac tincidunt felis rhoncus et. Aliquam ut porta felis, eu congue ligula. Duis ut tincidunt ligula.</p>
            <span className="seta"><MdArrowDropDown /></span>
            <span className="nome-avaliador"> <Avatar icon={<UserOutlined />} /> John Doe</span>
          </div>
        </div>
        <div className="card-avaliacao">
          <div className="estrelas">
          <span><AiFillStar />
          <AiFillStar />
          <AiFillStar /></span>
          <AiFillStar />
          <AiFillStar />
          </div>
          <div className="descricao">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut vestibulum leo. Vestibulum congue ante ligula, ac tincidunt felis rhoncus et. Aliquam ut porta felis, eu congue ligula. Duis ut tincidunt ligula.</p>
            <span className="seta"><MdArrowDropDown /></span>
            <span className="nome-avaliador"> <Avatar icon={<UserOutlined />} /> John Doe</span>
          </div>
        </div>
        <div className="card-avaliacao">
          <div className="estrelas">
          <span><AiFillStar />
          <AiFillStar />
          <AiFillStar /></span>
          <AiFillStar />
          <AiFillStar />
          </div>
          <div className="descricao">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut vestibulum leo. Vestibulum congue ante ligula, ac tincidunt felis rhoncus et. Aliquam ut porta felis, eu congue ligula. Duis ut tincidunt ligula.</p>
            <span className="seta"><MdArrowDropDown /></span>
            <span className="nome-avaliador"> <Avatar icon={<UserOutlined />} /> John Doe</span>
          </div>
        </div>
      </section>
      <section className='cardmodelsplans'>
        <button> entre em contato <i><BsFillArrowRightCircleFill /></i></button>
     </section>
    </div>
    </>
  )
}

export default Avaliation;