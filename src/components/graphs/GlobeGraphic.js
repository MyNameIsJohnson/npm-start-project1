import React from 'react'

export default function GlobeGraphic() {
  return (
     <div className='globeGraphic graph' style={{backgroundImage: "url('./images/globe_graphic.png"}} >
      <p className='percent'  >
        25%
      </p>
      <p className='excerpt'>
        The U.S. makes up 25% of the worlds prison population
      </p>
    </div>
  )
}
