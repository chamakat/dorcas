import React from 'react'
import Certified from './Certified';
import Conferences from './Conferences';
import Professional from './Professional';
import './skills.css';


const Skills = () => {
  return (
    <section className='skills section' id='skills'>
    <h2 className='section__title'>Extras</h2>
    <span className='section__subtitle'></span>

    <div className='skills_container container grid'>
    <Conferences />
    <Certified />
    <Professional />
    </div>
    </section>
  )
}

export default Skills