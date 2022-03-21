import React from 'react'

export default function HeaderNavber() {
  return (
  <header className="App-header">
    <img className='logo' src={process.env.PUBLIC_URL + 'images/TLM.jpeg'} alt='logo' />
    <nav className='navbar'>
      <ul>
        <li>ABOUT</li>
        <li>FOCUS AREAS</li>
        <li>STORIES</li>
        <li>MEDIA</li>
        <li>DONATE</li>
      </ul>
      <button className='getInvolved'>
        GET INVOLVED
      </button>
    </nav>
  </header>
  )
}
