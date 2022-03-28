import React from 'react'

export default function StudentStories() {
  return (
    <div className='studentStories testimonial' style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)),url('./images/studentStories.png')"}}>
      <a href='https://thelastmile.org/category/student-stories/' >
        <h3>
          Student Stories
        </h3>
        <p>Learn more about the successes of TLM students</p>
        <p className='more'>
          <i>Read More</i>
        </p>
      </a>
    </div>
  )
}
