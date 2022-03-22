import React from 'react'
import Education from './services/Education'
import Expansion from './services/Expansion'
import Vocation from './services/Vocation'
import Workforce from './services/Workforce'
import './services/service.css'

export default function ServiceSection() {
  return (
    //  services can use props and data file to pass in info? two columns two rows 
    <div className='services'>
    <Education />
    <Vocation />
    <Expansion />
    <Workforce />
  </div>
  )
}
