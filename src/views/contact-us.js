import React from 'react'

import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <Helmet>
        <title>ContactUs - exported project</title>
        <meta property="og:title" content="ContactUs - exported project" />
      </Helmet>
      <div className="contact-us-container1">
        <div className="contact-us-container2">
          <div className="contact-us-container3">
            <h1 className="contact-us-text">Package Customization</h1>
            <form className="contact-us-form">
              <input
                type="text"
                placeholder="placeholder"
                className="contact-us-textinput input"
              />
              <input
                type="text"
                placeholder="placeholder"
                className="contact-us-textinput1 input"
              />
              <input
                type="text"
                placeholder="placeholder"
                className="contact-us-textinput2 input"
              />
              <input
                type="text"
                enctype="Message"
                placeholder="Message"
                className="contact-us-textinput3 input"
              />
              <button type="button" className="contact-us-button button">
                Send Request
              </button>
            </form>
          </div>
          <div className="contact-us-container4">
            <h1 className="contact-us-text1">Contact Us</h1>
            <img
              alt="image"
              src="https://svgshare.com/i/15uK.svg"
              className="contact-us-image"
            />
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
    </div>
  )
}

export default ContactUs
