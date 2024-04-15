import React, { useState } from 'react';

import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
    return (
        <section className='qualification section' id='qualification'>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My personal journey
            </span>

            <div className='qualification_container container'>
                <div className='qualification_tabs'>
                    <div 
                    className={
                        toggleState === 1 
                        ? "qualification_button qualification_active button--flex"
                        : "qualification_button qualification_active button--flex"
                        }
                        onClick={() => toggleTab(1)}
                        >
                        <i className='uil uil-graduation-cap qualification_icon'></i>
                        Education
                    </div>

                    <div className={
                        toggleState === 2 
                        ? "qualification_button qualification_active button--flex"
                        : "qualification_button qualification_active button--flex"
                        }
                        onClick={() => toggleTab(2)}
                        >
                        <i className='uil uil-briefcase-alt 
                        qualification_icon'></i> 
                        Experience
                    </div>
                </div>

                <div className='qualification_sections'>
                    <div 
                    className={
                        toggleState === 1 
                        ? "qualification_content qualification_content-active" 
                        : "qualification_content"
                    }
                    >
                        <div className='qualification_data'>
                            <div>
                            <h3 className='qualification_title'>HND: Production/
                            Operations Management </h3>
                            <span 
                            className='qualification_subtitle'>
                            KADUNA POLYTECHNIC, KADUNA STATE
                             </span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'>
                                    </i> 2014
                                </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>

                        <div className='qualification_data'>
                                <div></div>

                                <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                                
                            <div>
                            <h3 className='qualification_title'>National Diploma: Business Studies</h3>
                            <span 
                            className='qualification_subtitle'>
                            KADUNA POLYTECHNIC, KADUNA STATE
                             </span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'>
                                    </i> 2009
                                </div>
                            </div>
                        </div>

                        <div className='qualification_data'>
                        <div>
                        <h3 className='qualification_title'>Secondary School</h3>
                        <span 
                        className='qualification_subtitle'>
                        COMPREHENSIVE COLLEGE KADUNA, KADUNA STATE
                         </span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'>
                                </i> 2004
                            </div>
                        </div>

                        <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>
                    </div>

                    <div className='qualification_data'>
                            <div></div>

                            <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>
                            
                        <div>
                        <h3 className='qualification_title'>Primary School</h3>
                        <span 
                        className='qualification_subtitle'>
                        ACS N/C 'C' NDA KADUNA, KADUNA STATE
                         </span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'>
                                </i> 1997
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className={
                        toggleState === 2 
                        ? "qualification_content qualification_content-active" 
                        : "qualification_content"
                    }>
                        <div className='qualification_data'>
                            <div>
                            <h3 className='qualification_title'>Executive Officer, Project and Programs Department</h3>
                            <span 
                            className='qualification_subtitle'>
                            FEDERAL MINISTRY OF SPECIAL DUTIES AND INTERGOVERNMENTAL AFFAIRS, ABUJA
                             </span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'>
                                    </i> 2023 - PRESENT
                                </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>

                        <div className='qualification_data'>
                                <div></div>

                                <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                                
                            <div>
                            <h3 className='qualification_title'>Assistant Executive Officer, Director Human Resource Department</h3>
                            <span 
                            className='qualification_subtitle'>
                            FEDERAL MINISTRY OF SPECIAL DUTIES AND INTERGOVERNMENTAL AFFAIRS, ABUJA.
                             </span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'>
                                    </i> 2022 - 2023
                                </div>
                            </div>
                        </div>

                        <div className='qualification_data'>
                        <div>
                        <h3 className='qualification_title'>Assistant Executive Officer, Director of Procurement Department</h3>
                        <span 
                        className='qualification_subtitle'>
                        FEDERAL MINISTRY OF SPECIAL DUTIES AND INTERGOVERNMENTAL AFFAIRS, ABUJA.
                         </span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'>
                                </i> 2021 - 2022
                            </div>
                        </div>

                        <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>
                    </div>
                
                    
                    <div className='qualification_data'>
                                <div></div>

                                <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                                
                            <div>
                            <h3 className='qualification_title'>Assistant Executive Officer, Store Unit</h3>
                            <span 
                            className='qualification_subtitle'>
                            FEDERAL MINISTRY OF SPECIAL DUTIES AND INTERGOVERNMENTAL AFFAIRS, ABUJA.
                             </span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'>
                                    </i> 2019 - 2021
                                </div>
                            </div>
                        </div>


            <div className='qualification_data'>
                            <div>
                            <h3 className='qualification_title'>Personal Assistant to the Director of Project</h3>
                            <span 
                            className='qualification_subtitle'>
                            JULIUS BARGER, ABUJA.
                             </span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'>
                                    </i> 2009
                                </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;