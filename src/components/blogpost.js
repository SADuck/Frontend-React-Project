import React from 'react'

import PropTypes from 'prop-types'

import './blogpost.css'

const Blogpost = (props) => {
  return (
    <div className="blogpost-blogpost">
      <div className="blogpost-container">
        <h1 className="blogpost-text">{props.number}</h1>
        <img
          src={props.descriptiveImg}
          alt={props.imageAlt1}
          className="blogpost-image"
        />
        <span className="blogpost-text1">{props.heading}</span>
        <div className="blogpost-container1">
          <span>{props.read}</span>
          <svg viewBox="0 0 1024 1024" className="blogpost-icon">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <img alt={props.imageAlt} src={props.line} className="blogpost-image1" />
    </div>
  )
}

Blogpost.defaultProps = {
  line: 'https://svgshare.com/i/1605.svg',
  imageAlt: 'image',
  number: '01',
  descriptiveImg:
    'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fFNlY3VyaXR5fGVufDB8fHx8MTcxNTYxOTYyMnww&ixlib=rb-4.0.3&w=200',
  imageAlt1: 'image',
  heading: 'Top 10 Exploits Intruders could\u2028use to break into your house!',
  read: 'Read',
}

Blogpost.propTypes = {
  line: PropTypes.string,
  imageAlt: PropTypes.string,
  number: PropTypes.string,
  descriptiveImg: PropTypes.string,
  imageAlt1: PropTypes.string,
  heading: PropTypes.string,
  read: PropTypes.string,
}

export default Blogpost
