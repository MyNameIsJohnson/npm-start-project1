import React from 'react'
import BottomFooter from './footers/BottomFooter'
import LeftFooter from './footers/LeftFooter'
import RightFooter from './footers/RightFooter'
import './footers/styles.css'

export default function Footer() {
  return (
    <footer >
      <LeftFooter />
      <RightFooter />
      <BottomFooter />
    </footer>
  )
}
