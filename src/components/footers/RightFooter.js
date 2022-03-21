import React from 'react'

export default function RightFooter() {
  return (
    <div className='rightFooter'>
      <p className='subject'>CONTACT</p>
      <p>info@thelastmile.org</p>
      <p className='subject'>MAILING ADDRESS</p>
      <p>548 Martket Street 70892</p>
      <p>San Francisco CA 94104</p>
      <p className='subject'>PROGRAMS</p>
      <p>TLM Radio</p>
      <ul class="icons">
        <li class="ssi-facebook">
          <a href="https://www.facebook.com/thelastmileorg" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + 'images/facebook.png'} alt='facebook' /></a></li>
        <li class="ssi-twitter">
          <a href="https://twitter.com/TLM" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + 'images/twitter.png'} alt='twitter' /></a></li>
        <li class="ssi-youtube">
          <a href="https://www.youtube.com/channel/UCxnslwxnp3acFh13V-uvvJQ" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + 'images/youtube.png'} alt='youtube' /></a></li>
        <li class="ssi-linkedin">
          <a href="https://www.linkedin.com/company/the-last-mile" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + 'images/linkedin.png'} alt='linkedin' /></a></li>
      </ul>
    </div>
  )
}
