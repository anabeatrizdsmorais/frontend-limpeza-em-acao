import React from 'react';
import style from './Header.module.css';
import Image from 'next/image';
import logo from './../../assets/images/logo.jpeg';

const Header = () => {
  return (
    <header className={style.header}>
        <div className={style.logo}>
            <Image 
                src={logo} 
                alt="Logo Limpeza em Ação"
                width={100}
                height={75}
            />
        </div>
        <div className={style.menu}>
            <ul>
                <li>
                    <a href="#empresa">A EMPRESA</a>
                </li>
                <li>
                    <a href="#servicos">SERVIÇOS</a>
                </li>
                <li>
                    <a href="#contato">CONTATO</a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header