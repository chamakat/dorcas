import React, { useState } from 'react';

import './header.css';

const Header = () => {
    /*================= Change Background Header ================ */
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        // when the scroll is higher than 560 viewport height,
        // add the show-header class to a tag with the header-top class.
        if (this.scrollY >= 80) header.classList.add
        ('scroll-header');
        else header.classList.remove('scroll-header');
    });

    /*================= Toggle Menu ================ */
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');

  return (
    <header className="header">
        <nav className="nav container">
            <a href='index.html' className='nav_logo'>Dorcas Chamakat John</a>

            <div className= {Toggle ? "nav_menu show-menu" :"nav_menu"}>
                <ul className='nav_list grid'>
                <li className='nav_item'>
                    <a href='#home' 
                    onClick={() => setActiveNav('#home')} 
                    className={
                        activeNav === "#home" ? "nav_link active-link" 
                        : "nav_link"
                    }
                    >
                        <i className='uil uil-estate nav_icon'></i> Home
                         
                    </a>
                </li>
                <li className='nav_item'>
                    <a 
                    href='#about' 
                    onClick={() => setActiveNav('#about')} 
                    className={
                        activeNav === "#about" ? "nav_link active-link" 
                        : "nav_link"
                    } 
                    >
                        <i className='uil uil-user nav_icon'></i> About
                    </a>
                </li>
                <li className='nav_item'>
                    <a href='#services' onClick={() => setActiveNav('#services')} 
                    className={
                        activeNav === "#services" ? "nav_link active-link" 
                        : "nav_link"
                    }
                    >
                        <i className='uil uil-briefcase-alt nav_icon'></i> Accomplishment
                        
                    </a>
                </li>
                <li className='nav_item'>
                    <a href='#qualification' onClick={() => setActiveNav('#qualification')} 
                    className={
                        activeNav === "#qualification" ? "nav_link active-link" 
                        : "nav_link"
                    }
                    >
                        <i className='uil uil-briefcase-alt nav_icon'></i> Qualification
                        
                    </a>
                </li>
                <li className='nav_item'>
                    <a href='#skills' onClick={() => setActiveNav('#skills')} 
                    className={
                        activeNav === "#skills" ? "nav_link active-link" 
                        : "nav_link"
                    }
                    >
                        <i className='uil uil-briefcase-alt nav_icon'></i> Extras
                        
                    </a>
                </li>
                <li className='nav_item'>
                    <a href='#gallery' onClick={() => setActiveNav('#gallery')} 
                    className={
                        activeNav === "#gallery" ? "nav_link active-link" 
                        : "nav_link"
                    }
                    >
                        <i className='uil uil-scenery nav_icon'></i> Gallery
                        
                    </a>
                </li>                    
                </ul>

                <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            
            <div className='nav_toggle' onClick={() => showMenu
            (!Toggle)}>
            <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header

