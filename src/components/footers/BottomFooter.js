import React from 'react'

export default function BottomFooter() {
  return (
    <div className='bottomFooter'>
      <p className='subject'>OUR PARTNERS</p>
      <div className='partners'>
      <a href='https://www.calpia.ca.gov/'><img className='partnerIcons calpia' src='images/calpia.png' alt='calpia logo'/> </a>
      <a href='https://www.cdcr.ca.gov/'><img className='partnerIcons cdcr' src='images/cdcr.png' alt='cdcr logo'/> </a>
      <a href='https://www.in.gov/idoc/'><img className='partnerIcons indiana' src='images/indiana.png' alt='indiana logo'/> </a>
      <a href='https://oklahoma.gov/doc.html'><img className='partnerIcons oklahoma' src='images/oklahoma.png' alt='oklahoma logo'/> </a>
      <a href='https://www.michigan.gov/corrections/'><img className='partnerIcons michigan' src='images/michigan.png' alt='michigan logo'/> </a>
      <a href='https://www.lobecktaylor.com/'><img className='partnerIcons lobecktaylor' src='images/lobeck.png' alt='lobecktaylor logo'/> </a>
      </div>
      <div className=''>
        <a href='https://www.guidestar.org/profile/46-2899930'><img className='partnerIcons turn2u 'src='images/turn2u.png' alt='turn2u logo'/> </a>

      </div>
      <div className="">
        <p className="disclaimer">
          This is a replica of The Last Mile Organization, that I was inspired to replicate. As a graduate of Track 1 Code 7371. My journey into web develpment ignited. My career aspirations as a Software Engineer sinked their roots and I am following my life goals. I have included a links to their sites contents for your interested reviewing. Thank you TLM for your great work!
        </p>
      </div>
    </div>
  )
}
