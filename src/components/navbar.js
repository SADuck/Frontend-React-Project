import React from 'react'

import PropTypes from 'prop-types'

import './navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = (props) => {
  return (
    <div className={`navbar-container ${props.rootClassName} `}>
      <h1 className="navbar-text">
        <span className="navbar-text1">Be</span>
        <span className="navbar-text2">ri</span>
        <span className="navbar-text3">m</span>
        <span className="navbar-text4">bo</span>
        <span className="navbar-text5">lo</span>
        <span className="navbar-text6">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="navbar-text7">Se</span>
        <span className="navbar-text8">curity</span>
      </h1>
      <Link
        to={props.linkText}
        
        rel="noreferrer noopener"
        className="navbar-link"
      >
        {props.text}
      </Link>
      <Link
        to={props.linkText1}
        
        rel="noreferrer noopener"
        className="navbar-link01"
      >
        {props.text1}
      </Link>
      <Link
        to={props.linkText2}
        
        rel="noreferrer noopener"
        className="navbar-link02"
      >
        {props.text2}
      </Link>
      <Link
        to={props.linkText3}
        
        rel="noreferrer noopener"
        className="navbar-link03"
      >
        {props.text3}
      </Link>
      <Link
        to={props.linkText4}
        
        rel="noreferrer noopener"
        className="navbar-link04"
      >
        {props.text4}
      </Link>
      <input
        type="text"
        placeholder={props.textinputPlaceholder}
        className="navbar-textinput input"
      />
      <div data-thq="thq-dropdown" className="navbar-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" className="navbar-dropdown-toggle">
          <div data-thq="thq-dropdown-arrow" className="navbar-dropdown-arrow">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path
                d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="navbar-dropdown-list">
          <li data-thq="thq-dropdown" className="navbar-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="navbar-dropdown-toggle1"
            >
              <Link
                to={props.linkText5}
                
                rel="noreferrer noopener"
                className="navbar-link05"
              >
                {props.text5}
              </Link>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="navbar-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="navbar-dropdown-toggle2"
            >
              <Link
                to={props.linkText6}
                
                rel="noreferrer noopener"
                className="navbar-link06"
              >
                {props.text6}
              </Link>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="navbar-dropdown2 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="navbar-dropdown-toggle3"
            >
              <Link
                to={props.linkText7}
                
                rel="noreferrer noopener"
                className="navbar-link07"
              >
                {props.text7}
              </Link>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="navbar-dropdown3 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="navbar-dropdown-toggle4"
            >
              <Link
                to={props.linkText8}
                
                rel="noreferrer noopener"
                className="navbar-link08"
              >
                {props.text8}
              </Link>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="navbar-dropdown4 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="navbar-dropdown-toggle5"
            >
              <Link
                to={props.linkText9}
                
                rel="noreferrer noopener"
                className="navbar-link09"
              >
                {props.text9}
              </Link>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="navbar-dropdown5 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="navbar-dropdown-toggle6"
            >
              <input
                type="text"
                placeholder={props.textinputPlaceholder1}
                className="navbar-textinput1 input"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  text9: 'Contact Us',
  rootClassName: '',
  text: 'Home',
  text7: 'About Us',
  linkText5: '/',
  text3: 'Blog',
  text2: 'About Us',
  linkText2: '/about-us',
  text4: 'Contact Us',
  linkText1: '/products',
  text5: 'Home',
  text6: 'Products',
  linkText3: '/blog',
  text1: 'Products',
  linkText7: '/about-us',
  linkText9: '/contact-us',
  linkText: '/',
  text8: 'Blog',
  linkText8: '/blog',
  textinputPlaceholder1: 'Search',
  linkText4: '/contact-us',
  textinputPlaceholder: 'Search',
  linkText6: 'https://example.com',
}

Navbar.propTypes = {
  text9: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text7: PropTypes.string,
  linkText5: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  linkText2: PropTypes.string,
  text4: PropTypes.string,
  linkText1: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  linkText3: PropTypes.string,
  text1: PropTypes.string,
  linkText7: PropTypes.string,
  linkText9: PropTypes.string,
  linkText: PropTypes.string,
  text8: PropTypes.string,
  linkText8: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  linkText4: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  linkText6: PropTypes.string,
}

export default Navbar
