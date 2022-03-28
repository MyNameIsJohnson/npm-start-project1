import React from 'react'

export default function HeaderNavber() {
  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.documentElement.scrollTop > 50) {
      document.getElementById("hero").className = "change";
      document.getElementById("App-header").className = "header";
    } else {
      document.getElementById("App-header").className = "";
      document.getElementById("hero").className = "";
    }
  }
  return (
  <header id="App-header">
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
