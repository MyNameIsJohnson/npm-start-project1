import React from 'react'

export default function IconNavbar() {
  return (
    <nav className='socialMedia'>
      <ul class="icons">
        <li >
          <a href="https://www.facebook.com/thelastmileorg" target="_blank" rel="noreferrer"><img class="icon" src={process.env.PUBLIC_URL + 'images/facebook.png'} alt='facebook' /></a></li>
        <li >
          <a href="https://twitter.com/TLM" target="_blank" rel="noreferrer"><img class="icon" src={process.env.PUBLIC_URL + 'images/twitter.png'} alt='twitter' /></a></li>
        <li >
          <a href="https://www.youtube.com/channel/UCxnslwxnp3acFh13V-uvvJQ" target="_blank" rel="noreferrer"><img class="icon" src={process.env.PUBLIC_URL + 'images/youtube.png'} alt='youtube' /></a></li>
        <li >
          <a href="https://www.linkedin.com/company/the-last-mile" target="_blank" rel="noreferrer"><img class="icon" src={process.env.PUBLIC_URL + 'images/linkedin.png'} alt='linkedin' /></a></li>
      </ul>
    </nav>
  )
}
