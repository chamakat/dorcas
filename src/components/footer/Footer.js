import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer_container container'>
            <h1 className='footer_title'>Dorcas</h1>

            <ul className='footer_list'>
                <li>
                    <a href='#about' className='footer_link'>About</a>
                </li>

                <li>
                    <a href='#services' className='footer_link'>Accomplishment</a>
                </li>

                <li>
                    <a href='#skills' className='footer_link'>Extras</a>
                </li>

                <li>
                    <a href='#gallery' className='footer_link'>Gallery</a>
                </li>
            </ul>

            <div className='footer_social'>
                <a 
                    href='https://facebook.com/dorcas.john.10?mibextid=uzlsik' 
                    className='footer_social-icon' 
                    target='blank'
                    >
                    <i class='bx bxl-facebook-circle'></i>
                </a>
        
                <a 
                    href='https://instagram.com/dorkeyjohn' 
                    className='footer_social-icon' 
                    target='blank'
                    >
                    <i class='bx bxl-instagram'></i>
                </a>

                <a 
                    href='https://youtube.com/@endtrevtv7360' 
                    className='footer_social-icon' 
                    target='blank'
                    >
                    <i class='bx bxl-youtube'></i>
                </a>
        
                <a 
                    href='https://twitter.com/lolaologuntoye?t=TbWDMzoz1iojXl6fx0mAcg&s=09' 
                    className='footer_social-icon' 
                    target='blank'
                    >
                    <i class='bx bxl-twitter' ></i>
                </a>
            </div>

            <span className='footer_copy'>
                &#169; VictorSylva. All rights reserved
            </span>
        </div>
    </footer>
  );
};

export default Footer;
