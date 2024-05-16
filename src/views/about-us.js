import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>AboutUs - exported project</title>
        <meta property="og:title" content="AboutUs - exported project" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <div className="about-us-container01">
        <h1 className="about-us-text">About Us</h1>
        <span className="about-us-text01">Get to know us</span>
      </div>
      <div className="about-us-container02">
        <div className="about-us-container03">
          <div className="about-us-container04">
            <h1 className="about-us-text02">
              <span>Our Approach</span>
              <br></br>
            </h1>
            <span className="about-us-text05">
              <span>At Berimbolo Security, we believe in providing</span>
              <br></br>
              <span>comprehensive security solutions that are tailored </span>
              <br></br>
              <span>
                to the unique needs of each client. Our approach is
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>rooted in a deep understanding of the security </span>
              <br></br>
              <span>landscape and a commitment to customer satisfaction.</span>
            </span>
          </div>
        </div>
        <div className="about-us-container05">
          <img
            alt="image"
            src="https://svgshare.com/i/1610.svg"
            className="about-us-image"
          />
        </div>
      </div>
      <div className="about-us-container06">
        <div className="about-us-container07">
          <img
            alt="image"
            src="https://svgshare.com/i/160J.svg"
            className="about-us-image1"
          />
        </div>
        <div className="about-us-container08">
          <div className="about-us-container09">
            <h1 className="about-us-text15">
              <span>Our Vision</span>
              <br></br>
            </h1>
            <span className="about-us-text18">
              <span>
                At Your Berimbolo Security, our vision is to create
                a safer world where
              </span>
              <br></br>
              <span>
                {' '}
                every home and business is equipped with the best security
                systems.
              </span>
              <br></br>
              <span>
                {' '}
                We aim to be the leading provider of security solutions, setting
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                the standard for innovation, quality, and service in the
                industry. 
              </span>
              <br></br>
              <br></br>
              <span>
                We envision a future where advanced technology and human
              </span>
              <br></br>
              <span>
                 ingenuity come together to provide unparalleled
                security solutions.
              </span>
              <br></br>
              <span>
                {' '}
                Our goal is to make high-quality security systems accessible and
              </span>
              <br></br>
              <span>
                {' '}
                affordable for all, thereby contributing to the safety and
                security of
              </span>
              <br></br>
              <span> our communities.</span>
            </span>
          </div>
        </div>
        <div className="about-us-container10">
          <img
            alt="image"
            src="https://svgshare.com/i/160J.svg"
            className="about-us-image2"
          />
        </div>
      </div>
      <div className="about-us-container11">
        <div className="about-us-container12">
          <div className="about-us-container13">
            <h1 className="about-us-text37">
              <span>Our Process</span>
              <br></br>
            </h1>
            <span className="about-us-text40">
              <span>
                At Berimbolo Security, we believe in providing top-notch
                security solutions
              </span>
              <br></br>
              <span>
                {' '}
                that are tailored to meet your specific needs. Our process is
                designed
              </span>
              <br></br>
              <span>
                to ensure maximum security and peace of mind for our clients
              </span>
            </span>
          </div>
        </div>
        <div className="about-us-container14">
          <img
            alt="image"
            src="https://svgshare.com/i/1611.svg"
            className="about-us-image3"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default AboutUs
