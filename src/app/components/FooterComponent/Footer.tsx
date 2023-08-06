import React from 'react'
import style from './Footer.module.css'
const Footer = () => {
    
    const date = new Date();
    const year: number = date.getFullYear();
    
    return (
        <footer className={` text-right ${style.footer}`}>{year} | Limpeza em Ação - Serviços</footer>
    )
}

export default Footer