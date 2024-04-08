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
                Executive Officer, Project and Programs Department, FEDERAL MINISTRY OF SPECIAL DUTIES 
                AND INTERGOVERNMENTAL AFFAIRS, ABUJA.
                2023-Present.
                </p>
              </li>

              <li className='services_modal-service'>
                <i className='uil uil-check-circle
                services_modal-icon'></i>
                <p className='services_modal-info'>
                Assistant Executive Officer, Director Human Resource Department, FEDERAL MINISTRY OF SPECIAL DUTIES
                AND INTERGOVERNMENTAL AFFAIRS, ABUJA.
                2022-2023.
                </p>
              </li>

              <li className='services_modal-service'>
                <i className='uil uil-check-circle
                services_modal-icon'></i>
                <p className='services_modal-info'>
                Assistant Executive Officer, Director of Procurement Department, FEDERAL MINISTRY OF SPECIAL DUTIES
                AND INTERGOVERNMENTAL AFFAIRS, ABUJA. 
                2021-2022
                </p>
              </li>

              <li className='services_modal-service'>
                <i className='uil uil-check-circle
                services_modal-icon'></i>
                <p className='services_modal-info'>
                Assistant Executive Officer, Store Unit, FEDERAL MINISTRY OF SPECIAL DUTIES
                AND INTERGOVERNMENTAL AFFAIRS, ABUJA. 
                2019-2021
                </p>
              </li>

              <li className='services_modal-service'>
                <i className='uil uil-check-circle
                services_modal-icon'></i>
                <p className='services_modal-info'>
                Personal Assistant, Director of Project, JULIUS BARGER, ABUJA.  
                2009
                </p>
              </li>
            </ul>
          </div>
        </div>
        
      </div>

      <div className='services_content'>
      <div>
      <i class="uil uil-award services_icon"></i>
        <h3 className='services_title'>Certificates /<br />
        Awarded </h3>
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

          <h3 className='services_modal-title'>Certificates Awarded</h3>
          <p className='services_modal-description'></p>

          <ul className='services_modal-services grid'>
            <li className='services_modal-service'>
              <i className='uil uil-check-circle
              services_modal-icon'></i>
              <p className='services_modal-info'>
              Certificate, Capacity Building Workshop on Code of Ethics & PMS. THE PRESIDENCY, FEDERAL MINISTRY OF SPECIAL DUTIES
              AND INTERGOVERNMENTAL AFFAIRS. 
              November, 2023
              </p>
            </li>
            <li className='services_modal-service'>
              <i className='uil uil-check-circle
              services_modal-icon'></i>
              <p className='services_modal-info'>
              Certificate of Participation, GILFAI NIG. LTD. (Management Trainers & Consultants), On Specialized Capacity Building Workshop on Performance Management System.
              FEDERAL MINISTRY OF SPECIAL DUTIES
              AND INTERGOVERNMENTAL AFFAIRS.
              November 2022
              </p>
            </li>
            <li className='services_modal-service'>
              <i className='uil uil-check-circle
              services_modal-icon'></i>
              <p className='services_modal-info'>
              Certificate of Attendance, On Public Service Rules. Presented By GriTECH
              August 2021
              </p>
            </li>
            <li className='services_modal-service'>
              <i className='uil uil-check-circle
              services_modal-icon'></i>
              <p className='services_modal-info'>
              Certificate of National Service, NATIONAL YOUTH SERVICE CORPS 
              May 2016
              </p>
            </li>
            <li className='services_modal-service'>
              <i className='uil uil-check-circle
              services_modal-icon'></i>
              <p className='services_modal-info'>
              Diploma Certificate in Data Processing and Programming, By MULTI-LINKS COMPUTER SYSTEMS
              November 2005  
              May 2016
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
