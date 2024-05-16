import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
        <meta property="og:title" content="exported project" />
      </Helmet>
      <Navbar></Navbar>
      <div className="home-container1">
        <img
          alt="image"
          src="https://i.ibb.co/0DdCsbM/Vector-1.png"
          className="home-image"
        />
        <img
          alt="image"
          src="https://i.ibb.co/9GXHh7h/Vector-Enhanced-2-Compressed.png"
          loading="eager"
          className="home-image1"
        />
      </div>
      <div className="home-container2">
        <img
          alt="image"
          src="https://svgshare.com/i/15vN.svg"
          className="home-image2"
        />
      </div>
      <div className="home-container3">
        <div className="home-container4">
          <h1 className="home-heading">
            <span>Features</span>
            <br></br>
            <span className="home-text02">
              Our Features, how we help you, and what you benefit from us.
            </span>
            <br></br>
          </h1>
          <img
            alt="image"
            src="https://svgshare.com/i/15wA.svg"
            className="home-image3"
          />
        </div>
        <div className="home-container5">
          <div className="home-container6">
            <div className="home-container7">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYzfHxCdXNpbmVzcyUyMHdvbWFufGVufDB8fHx8MTcxNTMzMjUwNHww&amp;ixlib=rb-4.0.3&amp;w=200"
                loading="eager"
                className="home-image4"
              />
              <span className="home-text04">– Amanda Caxton</span>
            </div>
            <span className="home-text05">
              <span className="home-text06">”</span>
              <span className="home-text07">Thanks </span>
              <span className="home-text08">to Be</span>
              <span className="home-text09">ri</span>
              <span className="home-text10">m</span>
              <span className="home-text11">bo</span>
              <span className="home-text12">
                lo
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text13">Se</span>
              <span className="home-text14">curity,</span>
              <br className="home-text15"></br>
              <span className="home-text16">my business </span>
              <span className="home-text17">is more secure than ever.</span>
              <br className="home-text18"></br>
              <span className="home-text19">
                For business owners, security is a top priority.
              </span>
            </span>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
