import React from 'react'
import Conferences from './Conferences';
import './skills.css';


const Skills = () => {
  return (
    <section className='skills section' id='skills'>
    <h2 className='section__title'>Extras</h2>
    <span className='section__subtitle'></span>

    <div className='skills_container container grid'>
    <Conferences />
    </div>
    </section>
  )
}

export default Skills