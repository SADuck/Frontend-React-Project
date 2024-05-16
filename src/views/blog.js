import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Blogpost from '../components/blogpost'
import Footer from '../components/footer'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - exported project</title>
        <meta property="og:title" content="Blog - exported project" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <Blogpost></Blogpost>
      <Blogpost number="02"></Blogpost>
      <Blogpost number="03"></Blogpost>
      <Blogpost number="04"></Blogpost>
      <Blogpost number="05"></Blogpost>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Blog
