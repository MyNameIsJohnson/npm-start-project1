import React from 'react'
import GlobeGraphic from './graphs/GlobeGraphic';
import USAGraphic from './graphs/USAGraphic';
import CaliforniaGraphic from './graphs/CaliforniaGraphic';
import './graphs/styles.css';

export default function graphicSection() {
  return (
    //  graph data align on one row 
    <div className='graphSection'>
      <h4>THE PROBLEM</h4>
      <h1>The U.S. Justice System is broken.</h1>
      <div className='graphs'>


      <GlobeGraphic />
      <USAGraphic />
      <CaliforniaGraphic />
      </div>

    </div>
  )
}
