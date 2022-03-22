import React from 'react'

export default function usaGraphic() {
  return (
    <div className='usaGraphic' style={{backgroundImage: "url('./images/usa_graphic.png"}}>
      <p className='percent'>
        700%
      </p>
      <p className='excerpt'>
        Since the 1970's, the prison population in the U.S. has increased by 700%
      </p>
    </div>
  )
}
