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
                            <h3 className='qualification_title'>MSc: Social Work</h3>
                            <span 
                            className='qualification_subtitle'>
                            EKITI STATE UNIVERSITY, Ado-Ekiti, Ekiti State
                             </span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'>
                                    </i> 2019
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
                            <h3 className='qualification_title'>BSc: Nursing Science</h3>
                            <span 
                            className='qualification_subtitle'>
                            NATIONAL OPEN UNIVERSITY
                             </span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'>
                                    </i> 2017
                                </div>
                            </div>
                        </div>

                        <div className='qualification_data'>
                        <div>
                        <h3 className='qualification_title'>Advanced Diploma: Social Work Administration</h3>
                        <span 
                        className='qualification_subtitle'>
                        CROWN POLYTECHNIC, Ekiti State
                         </span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'>
                                </i> 2010
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
                        <h3 className='qualification_title'>BSc: Health Education</h3>
                        <span 
                        className='qualification_subtitle'>
                        EKITI STATE UNIVERSITY, Ado-Ekiti
                         </span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'>
                                </i> 2003
                            </div>
                        </div>
                    </div>

                    <div className='qualification_data'>
                        <div>
                        <h3 className='qualification_title'>Diploma: Public Health Nursing <br/>
                        Diploma: Community Health Nursing</h3>
                        <span 
                        className='qualification_subtitle'>
                        SCHOOL OF HEALTH TECHNOLOGY, Akure ,Ondo State
                         </span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'>
                                </i> 1992 - 1993
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
                    <h3 className='qualification_title'>RN: Registered Nurse</h3>
                    <span 
                    className='qualification_subtitle'>
                    WESLEY GUILD HOSPITAL OBAFEMI AWOLOWO 
                    UNIVERSITY TEACHING HOSPITAL, Ilesa
                     </span>
                        <div className='qualification_calendar'>
                            <i className='uil uil-calendar-alt'>
                            </i> 1988
                        </div>
                    </div>
                </div>

                <div className='qualification_data'>
                            <div>
                            <h3 className='qualification_title'>RM: Registered Midwife</h3>
                            <span 
                            className='qualification_subtitle'>
                            ST LOUIS SCHOOL OF MIDWIFERY, Owo
                             </span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'>
                                    </i> 1985
                                </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
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
                            <h3 className='qualification_title'>Deputy Director, Public Health Department</h3>
                            <span 
                            className='qualification_subtitle'>
                            Ekiti State Ministry of Health & Human Services
                             </span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'>
                                    </i> 2022 - 2023
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
                            <h3 className='qualification_title'>State Focal Person, Non-Communicable Diseases</h3>
                            <span 
                            className='qualification_subtitle'>
                            Ekiti State Ministry of Health & Human Services
                             </span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'>
                                    </i> 2022 - 2023
                                </div>
                            </div>
                        </div>

                        <div className='qualification_data'>
                        <div>
                        <h3 className='qualification_title'>Deputy Pillar Lead, Risk Communication and Community Engagement</h3>
                        <span 
                        className='qualification_subtitle'>
                        Ekiti State Ministry of Health & Human Services
                         </span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'>
                                </i> 2020 - 2023
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
                            <h3 className='qualification_title'>Cancer Control Desk Officer</h3>
                            <span 
                            className='qualification_subtitle'>
                            Ekiti State Ministry of Health & Human Services
                             </span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'>
                                    </i> 2020 - 2023
                                </div>
                            </div>
                        </div>


            <div className='qualification_data'>
                            <div>
                            <h3 className='qualification_title'>Public Health Emergency Centre</h3>
                            <span 
                            className='qualification_subtitle'>
                            Ekiti State Ministry of Health & Human Services
                             </span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'>
                                    </i> 2020 - 2023
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
                    <h3 className='qualification_title'>State Health Educator</h3>
                    <span 
                    className='qualification_subtitle'>
                    Ekiti State Ministry of Health & Human Services
                     </span>
                        <div className='qualification_calendar'>
                            <i className='uil uil-calendar-alt'>
                            </i> 2016 - 2023
                        </div>
                    </div>
                </div>

            <div className='qualification_data'>
                    <div>
                    <h3 className='qualification_title'>Deputy Director, Child Development Department</h3>
                    <span 
                    className='qualification_subtitle'>
                    Ekiti State Ministry of Women Affairs, Social Development & Gender Empowerment
                    </span>
                        <div className='qualification_calendar'>
                            <i className='uil uil-calendar-alt'>
                            </i> 2012 - 2015
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
                    <h3 className='qualification_title'>Assistant Director, Women Affairs Department</h3>
                    <span 
                    className='qualification_subtitle'>
                    Ekiti State Ministry of Women Affairs, Social Development & Gender Empowerment
                    </span>
                        <div className='qualification_calendar'>
                            <i className='uil uil-calendar-alt'>
                            </i> 1998 - 2014
                        </div>
                    </div>
                </div>

                <div className='qualification_data'>
                <div>
                <h3 className='qualification_title'>Officer in Charge, Basic Health Centre, Odo,Ado-Ekiti</h3>
                <span 
                className='qualification_subtitle'>
                Local Government Health Centre
                </span>
                    <div className='qualification_calendar'>
                        <i className='uil uil-calendar-alt'>
                        </i> 1997 - 1998
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
                    <h3 className='qualification_title'>Officer-in-Charge, Basic Health Centre, Igede-Ekiti</h3>
                    <span 
                    className='qualification_subtitle'>
                    Local Government Health Centre
                    </span>
                        <div className='qualification_calendar'>
                            <i className='uil uil-calendar-alt'>
                            </i> 1989 - 1991
                        </div>
                    </div>
                </div>


            <div className='qualification_data'>
                    <div>
                    <h3 className='qualification_title'>Consultancy for GBV/Sexual Exploitation and Abuse ( SEA) 
                    Management Plan for Nigeria Digital
                    Identification for Development (ID4D) Project</h3>
                    <span 
                    className='qualification_subtitle'>
                    Non- Governmental Organization (NGO) Experience
                    </span>
                        <div className='qualification_calendar'>
                            <i className='uil uil-calendar-alt'>
                            </i> 2022 - on-going
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
            <h3 className='qualification_title'>Mapping of Services for Survivors of GBV in Delta State SURWASH</h3>
            <span 
            className='qualification_subtitle'>
            Non- Governmental Organization (NGO) Experience
            </span>
                <div className='qualification_calendar'>
                    <i className='uil uil-calendar-alt'>
                    </i> 2022 - on-going
                </div>
            </div>
                </div>

                <div className='qualification_data'>
                <div>
                <h3 className='qualification_title'>Sustainable Urban & Rural Water Supply, Sanitation and Hygiene Program for Result,
                Plateau State Ministry of Water Resources & Energy</h3>
                <span 
                className='qualification_subtitle'>
                Non- Governmental Organization (NGO) Experience
                 </span>
                    <div className='qualification_calendar'>
                        <i className='uil uil-calendar-alt'>
                        </i> 2022
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
                <h3 className='qualification_title'>GBV/Protection from Sexual Exploitation and Abuse (PSEA) in the National Urban Water Sector 
                Reform Project in Ekiti State Water Corporation, under Nigeria Erosion and Watershed Management 
                Project (NEWMAP) in CONSURTIUM with New Initiative and Social Development[NISD]
                Supported by World Bank</h3>
                <span 
                className='qualification_subtitle'>
                Non- Governmental Organization (NGO) Experience
                 </span>
                    <div className='qualification_calendar'>
                        <i className='uil uil-calendar-alt'>
                        </i> 2020 - 2022
                    </div>
                </div>
            </div>

            <div className='qualification_data'>
            <div>
            <h3 className='qualification_title'>Gender Based Violence (GBV) Mapping for TRIMMING Participatory Scheme and Development
            of Proactive Prevention Plan (PPRP),Ekiti in CONSURTIUM with New Initiative and Social 
            Development[NISD] (Supported by World Bank)</h3>
            <span 
            className='qualification_subtitle'>
            Non- Governmental Organization (NGO) Experience
             </span>
                <div className='qualification_calendar'>
                    <i className='uil uil-calendar-alt'>
                    </i> 2020 - 2021
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
                <h3 className='qualification_title'>Implementation of the Vulnerable Group Investment Component Development Project for
                the vulnerable group in Efon Alaaye, Ekiti State under Ekiti State Community and Social 
                Development Agency (EKCSDA).Supported by World Bank</h3>
                <span 
                className='qualification_subtitle'>
                Non- Governmental Organization (NGO) Experience
                 </span>
                    <div className='qualification_calendar'>
                        <i className='uil uil-calendar-alt'>
                        </i> 2018 - 2019
                    </div>
                </div>
            </div>


        <div className='qualification_data'>
                <div>
                <h3 className='qualification_title'>Promoting Access to Information and Support Sustainable Livelihoods for the Reduction 
                of Vulnerable Children Burden in Afao and Iworoko Ekiti Sponsored by United States Of 
                America Embassy</h3>
                <span 
                className='qualification_subtitle'>
                Non- Governmental Organization (NGO) Experience
                 </span>
                    <div className='qualification_calendar'>
                        <i className='uil uil-calendar-alt'>
                        </i> 2015 - 2016
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
        <h3 className='qualification_title'>Social Mobilization for Tuberculosis Control 
        Supported by Global Fund/Centre for
        Gender and Social Research</h3>
        <span 
        className='qualification_subtitle'>
        Non- Governmental Organization (NGO) Experience
         </span>
            <div className='qualification_calendar'>
                <i className='uil uil-calendar-alt'>
                </i> 2008
            </div>
        </div>
            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;