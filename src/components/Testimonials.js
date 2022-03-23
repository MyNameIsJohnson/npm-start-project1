import React from 'react'
import AnnualReport from './testimonials/AnnualReport'
import PartnerStories from './testimonials/PartnerStories'
import SecondChance from './testimonials/SecondChance'
import StudentStories from './testimonials/StudentStories'
import './testimonials/styles.css'
export default function Testimonials() {
  return (
    // {/* testimonials 3 columns 2 rows. left div takes 50% column 1 and row 2. Second div takes 50% 2 columns and 1 row. next 2 divs takes 25% of column 2 and column 3 of row 2  */}
    <div className='testimonials'>
      <SecondChance />
      <StudentStories />
      <PartnerStories />
      <AnnualReport />
    </div>
  )
}
