import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Footer = (props) => {
  return (
    <div className={`footer-container ${props.rootClassName} `}>
      <div className="footer-container1">
        <div className="footer-container2">
          <div className="footer-container3">
            <div className="footer-container4">
              <Link
                to={props.linkText}
                
                rel="noreferrer noopener"
                className="footer-link"
              >
                {props.text}
              </Link>
              <Link
                to={props.linkText1}
                
                rel="noreferrer noopener"
                className="footer-link1"
              >
                {props.text1}
              </Link>
              <Link
                to={props.linkText2}
                
                rel="noreferrer noopener"
                className="footer-link2"
              >
                {props.text2}
              </Link>
              <Link
                to={props.linkText3}
                
                rel="noreferrer noopener"
                className="footer-link3"
              >
                {props.text3}
              </Link>
            </div>
            <div className="footer-container5">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="footer-image"
              />
              <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                className="footer-image1"
              />
              <img
                alt={props.imageAlt3}
                src={props.imageSrc3}
                className="footer-image2"
              />
              <img
                alt={props.imageAlt4}
                src={props.imageSrc4}
                className="footer-image3"
                href="https://twitter.com/"
              />
            </div>
            <div className="footer-container6">
              <Link
                to={props.linkText4}
                
                rel="noreferrer noopener"
                className="footer-link4"
              >
                {props.text4}
              </Link>
              <Link
                to={props.linkText5}
                
                rel="noreferrer noopener"
                className="footer-link5"
              >
                {props.text5}
              </Link>
              <Link
                to={props.linkText6}
                
                rel="noreferrer noopener"
                className="footer-link6"
              >
                {props.text6}
              </Link>
              <Link
                to={props.linkText7}
                
                rel="noreferrer noopener"
                className="footer-link7"
              >
                {props.text7}
              </Link>
            </div>
          </div>
          <div className="footer-container7">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="footer-image4"
            />
            <div className="footer-container8">
              <span className="footer-text">{props.text8}</span>
              <span className="footer-text1">
                <span className="">©2024 Be</span>
                <span className="">ri</span>
                <span className="">m</span>
                <span className="">bo</span>
                <span className="">
                  lo
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="">Se</span>
                <span className="">curity. All rights reserved.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  linkText5: '/blog',
  imageAlt1: 'image',
  linkText7: '/testominals',
  text: 'News',
  imageAlt4: 'image',
  imageSrc3: 'https://svgshare.com/i/15yg.svg',
  text8: 'Privacy Policy and Terms of Use',
  linkText4: '/FAQ',
  linkText3: '/contact-us',
  imageSrc1: 'https://svgshare.com/i/160F.svg',
  linkText: '/blog',
  text6: 'Products',
  text4: 'FAQ',
  text1: 'About',
  imageAlt2: 'image',
  linkText2: '/products',
  rootClassName: '',
  linkText1: '/about-us',
  text5: 'Blog',
  linkText6: '',
  imageAlt: 'image',
  imageAlt3: 'image',
  imageSrc2: 'https://svgshare.com/i/160R.svg',
  text2: 'Packages',
  text3: 'Contact Us',
  text7: 'Testimonials',
  imageSrc: 'https://svgshare.com/i/15uK.svg',
  imageSrc4: 'https://svgshare.com/i/15zj.svg',
}

Footer.propTypes = {
  linkText5: PropTypes.string,
  imageAlt1: PropTypes.string,
  linkText7: PropTypes.string,
  text: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageSrc3: PropTypes.string,
  text8: PropTypes.string,
  linkText4: PropTypes.string,
  linkText3: PropTypes.string,
  imageSrc1: PropTypes.string,
  linkText: PropTypes.string,
  text6: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  imageAlt2: PropTypes.string,
  linkText2: PropTypes.string,
  rootClassName: PropTypes.string,
  linkText1: PropTypes.string,
  text5: PropTypes.string,
  linkText6: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc2: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text7: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc4: PropTypes.string,
}

export default Footer
