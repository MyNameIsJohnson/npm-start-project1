import React from 'react'

export default function SecondChance() {
  return (
    <div className='secondChance testimonial' style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),url('./images/secondChance.png')"}}>
      <a href='https://medium.com/@heller.syd/a-second-chance-is-not-equal-to-a-fair-chance-9477338ede28'>
        <h3>
          "A Second Chance is not Equal to a Fair Chance"
        </h3>
        <p>
          By Syd Heller, Chief Program Officer of The Last Mile
        </p>
        <p className='more'>
          <i>Read More</i>
        </p>
      </a>         
    </div>
  )
}
