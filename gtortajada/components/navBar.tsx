import { useState } from 'react'
// import React from "react" //'Para construir o componente' - não sei a real necessidade por isso vou deixar comentado
import Link from "next/link" //Para navegação entre páginas sem recarregar
import { usePathname } from 'next/navigation'

export default function navBar() {
    const [showLinks, serShowLinks] = useState(false);
    const pathname = usePathname();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navLinks = [
        { href: "/", text: "Home" },
        { href: "/servicos", text: "Serviços" },
        { href: "/contato", text: "Contato" }
]

return (
    <nav className='text-center'></nav>

)

}
// 
const Navbar: React.FC = () => {
    const myFunction = () => {
      const topnav = document.getElementById('myTopnav');
      if (topnav) {
        if (topnav.className === 'topnav') {
          topnav.className += ' responsive';
        } else {
          topnav.className = 'topnav';
        }
      }
    };
  
    return (
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    );
  };
