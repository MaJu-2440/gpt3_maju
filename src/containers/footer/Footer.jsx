import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others ?</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
        <img src={logo} alt="logo" />
        <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Chreheichef 66e6f4 646e 64ef efaef</p>
          <p>658 656 941 222</p>
          <p>Contact</p>
        </div>
      </div>

      <div className='gpt3__footer-copy'>
        <p>2025 GTP-3. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
