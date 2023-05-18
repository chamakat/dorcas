import React, { useState } from 'react';

import './services.css';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className='services section' id='services'>
    <h2 className='section__title'>Accomplishments </h2>
    <span className='section__subtitle'>What was accomplished</span>

    <div className='services_container container grid'>

      <div className='services_content'>
        <div>
          <i className='uil uil-arrow services_icon'></i>
          <h3 className='services_title'>Positions <br /> Held</h3>
        </div>

        <span className='services_button' onClick={() =>
          toggleTab(2)}>
        View More
        <i className='uil uil-arrow-right 
        services_button-icon'></i>
        </span>

        <div className={toggleState === 2 ? 'services_modal active-modal' : 'services_modal'}>
          <div className='services_modal-content'>
            <i onClick={() => toggleTab(0)} className='uil uil-times
            services_modal-close'></i>

            <h3 className='services_modal-title'>Positions Held</h3>
            <p className='services_modal-description'></p>

            <ul className='services_modal-services grid'>
              <li className='services_modal-service'>
                <i className='uil uil-check-circle
                services_modal-icon'></i>
                <p className='services_modal-info'>
                President, Association of the Wife of the Head of 
                Service/Permanent Secretaries and Female Permanent Secretaries. 
                2019
                </p>
              </li>

              <li className='services_modal-service'>
                <i className='uil uil-check-circle
                services_modal-icon'></i>
                <p className='services_modal-info'>
                Secretary, State Action Committee on HIV &AIDS-Ministry of 
                Women Affairs, Ekiti State.
                </p>
              </li>

              <li className='services_modal-service'>
                <i className='uil uil-check-circle
                services_modal-icon'></i>
                <p className='services_modal-info'>
                Secretary to the Wife of Executive Governor (Ekiti State) 
                on National Women Coalition on HIV/AIDS. 
                2007-2008
                </p>
              </li>

              <li className='services_modal-service'>
                <i className='uil uil-check-circle
                services_modal-icon'></i>
                <p className='services_modal-info'>
                Focal Officer/Secretary, State Steering Committee on 
                Orphans and Vulnerable Children, Ekiti state. 
                1998-2015
                </p>
              </li>

              <li className='services_modal-service'>
                <i className='uil uil-check-circle
                services_modal-icon'></i>
                <p className='services_modal-info'>
                Focal Officer/Secretary, State Child’s Rights Implementation 
                and Monitoring Committee, Ekiti State. 
                1998-2015
                </p>
              </li>
            </ul>
          </div>
        </div>
        
      </div>

      <div className='services_content'>
      <div>
      <i class="uil uil-award services_icon"></i>
        <h3 className='services_title'>Award /<br />
        Publication Peer Review Paper </h3>
      </div>

      <span className='services_button' onClick={() =>
        toggleTab(3)}>
      View More <i
      className='uil uil-arrow-right 
      services_button-icon'></i>
      </span>

      <div className={toggleState === 3 ? 'services_modal active-modal' : 'services_modal'}>
        <div className='services_modal-content'>
          <i onClick={() => toggleTab(0)} className='uil uil-times
          services_modal-close'></i>

          <h3 className='services_modal-title'>Award /Publication 
          Peer Review Paper (Published)</h3>
          <p className='services_modal-description'></p>

          <ul className='services_modal-services grid'>
            <li className='services_modal-service'>
              <i className='uil uil-check-circle
              services_modal-icon'></i>
              <p className='services_modal-info'>
              Certificate of recognition by the Governor of Ekiti State, Dr. John Kayode Fayemi 
              for Contribution and Outstanding service to Ekiti State COVID-19 Taskforce. 
              0ctober, 2022
              </p>
            </li>

            <li className='services_modal-service'>
              <i className='uil uil-check-circle
              services_modal-icon'></i>
              <p className='services_modal-info'>
              Rurality and the Girl Child Education; Prospects and Challenges for National Development, (Afolabi, C. 
              Y,Adedeji, A. O; Babafemi O. M. Ologuntoye, M. A. Adehsoye, O. I. Faseluka W. K... 
              2017
              </p>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    </div>
    </section>
  )
}

export default Services
