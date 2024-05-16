import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './products.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Products = (props) => {
  return (
    <div className="products-container">
      <Helmet>
        <title>Products - exported project</title>
        <meta property="og:title" content="Products - exported project" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div className="products-container01">
        <div className="products-container02">
          <div className="products-container03">
            <h1 className="products-text">SORT</h1>
            <img
              alt="image"
              src="https://svgshare.com/i/1605.svg"
              className="products-image"
            />
            <div className="products-container04">
              <span className="products-text01">What’s New</span>
              <svg viewBox="0 0 1024 1024" className="products-icon">
                <path d="M961.714 461.714l-424 423.429c-14.286 14.286-37.143 14.286-51.429 0l-424-423.429c-14.286-14.286-14.286-37.714 0-52l94.857-94.286c14.286-14.286 37.143-14.286 51.429 0l303.429 303.429 303.429-303.429c14.286-14.286 37.143-14.286 51.429 0l94.857 94.286c14.286 14.286 14.286 37.714 0 52z"></path>
              </svg>
            </div>
          </div>
          <div className="products-container05">
            <h1 className="products-text02">FILTER</h1>
            <img
              alt="image"
              src="https://svgshare.com/i/1605.svg"
              className="products-image1"
            />
            <input
              type="text"
              placeholder="Type"
              className="products-textinput input"
            />
            <input
              type="text"
              placeholder="Rating"
              className="products-textinput1 input"
            />
            <input
              type="text"
              placeholder="Type"
              className="products-textinput2 input"
            />
            <input
              type="text"
              placeholder="Type"
              className="products-textinput3 input"
            />
            <div
              data-thq="thq-dropdown"
              className="products-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="products-dropdown-toggle"
              >
                <div
                  data-thq="thq-dropdown-arrow"
                  className="products-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="products-icon02">
                    <path d="M961.714 461.714l-424 423.429c-14.286 14.286-37.143 14.286-51.429 0l-424-423.429c-14.286-14.286-14.286-37.714 0-52l94.857-94.286c14.286-14.286 37.143-14.286 51.429 0l303.429 303.429 303.429-303.429c14.286-14.286 37.143-14.286 51.429 0l94.857 94.286c14.286 14.286 14.286 37.714 0 52z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="products-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle01"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link"
                    >
                      Home
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown01 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle02"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link01"
                    >
                      Products
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown02 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle03"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link02"
                    >
                      About Us
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown03 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle04"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link03"
                    >
                      Blog
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown04 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle05"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link04"
                    >
                      Contact Us
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown05 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle06"
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      className="products-textinput4 input"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="products-thq-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="products-dropdown-toggle07"
              >
                <div
                  data-thq="thq-dropdown-arrow"
                  className="products-dropdown-arrow1"
                >
                  <svg viewBox="0 0 1024 1024" className="products-icon04">
                    <path d="M961.714 461.714l-424 423.429c-14.286 14.286-37.143 14.286-51.429 0l-424-423.429c-14.286-14.286-14.286-37.714 0-52l94.857-94.286c14.286-14.286 37.143-14.286 51.429 0l303.429 303.429 303.429-303.429c14.286-14.286 37.143-14.286 51.429 0l94.857 94.286c14.286 14.286 14.286 37.714 0 52z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="products-dropdown-list1"
              >
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown06 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle08"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link05"
                    >
                      Home
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown07 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle09"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link06"
                    >
                      Products
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown08 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle10"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link07"
                    >
                      About Us
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown09 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle11"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link08"
                    >
                      Blog
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown10 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle12"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link09"
                    >
                      Contact Us
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown11 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle13"
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      className="products-textinput5 input"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="products-thq-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="products-dropdown-toggle14"
              >
                <div
                  data-thq="thq-dropdown-arrow"
                  className="products-dropdown-arrow2"
                >
                  <svg viewBox="0 0 1024 1024" className="products-icon06">
                    <path d="M961.714 461.714l-424 423.429c-14.286 14.286-37.143 14.286-51.429 0l-424-423.429c-14.286-14.286-14.286-37.714 0-52l94.857-94.286c14.286-14.286 37.143-14.286 51.429 0l303.429 303.429 303.429-303.429c14.286-14.286 37.143-14.286 51.429 0l94.857 94.286c14.286 14.286 14.286 37.714 0 52z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="products-dropdown-list2"
              >
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown12 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle15"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link10"
                    >
                      Home
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown13 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle16"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link11"
                    >
                      Products
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown14 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle17"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link12"
                    >
                      About Us
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown15 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle18"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link13"
                    >
                      Blog
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown16 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle19"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link14"
                    >
                      Contact Us
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown17 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle20"
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      className="products-textinput6 input"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="products-thq-dropdown3 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="products-dropdown-toggle21"
              >
                <div
                  data-thq="thq-dropdown-arrow"
                  className="products-dropdown-arrow3"
                >
                  <svg viewBox="0 0 1024 1024" className="products-icon08">
                    <path d="M961.714 461.714l-424 423.429c-14.286 14.286-37.143 14.286-51.429 0l-424-423.429c-14.286-14.286-14.286-37.714 0-52l94.857-94.286c14.286-14.286 37.143-14.286 51.429 0l303.429 303.429 303.429-303.429c14.286-14.286 37.143-14.286 51.429 0l94.857 94.286c14.286 14.286 14.286 37.714 0 52z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="products-dropdown-list3"
              >
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown18 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle22"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link15"
                    >
                      Home
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown19 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle23"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link16"
                    >
                      Products
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown20 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle24"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link17"
                    >
                      About Us
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown21 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle25"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link18"
                    >
                      Blog
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown22 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle26"
                  >
                    <Link
                      to="https://example.com"
                      
                      rel="noreferrer noopener"
                      className="products-link19"
                    >
                      Contact Us
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="products-dropdown23 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="products-dropdown-toggle27"
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      className="products-textinput7 input"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="products-container06">
          <div className="products-container07">
            <div className="products-container08">
              <div className="products-container09">
                <h1 className="products-text03">
                  <span>Basic security package</span>
                  <br></br>
                  <br></br>
                </h1>
                <span className="products-text07">
                  Essential security items, Recommended for Small houses.
                </span>
              </div>
              <img
                alt="image"
                src="https://svgshare.com/i/1617.svg"
                className="products-image2"
              />
              <div className="products-container10">
                <span className="products-text08">Package</span>
                <div className="products-container11">
                  <span className="products-text09">Generic</span>
                  <span className="products-text10">150$</span>
                </div>
              </div>
            </div>
            <div className="products-container12">
              <div className="products-container13">
                <div className="products-container14">
                  <h1 className="products-text11">
                    <span>Deluxe security package</span>
                    <br></br>
                  </h1>
                  <span className="products-text14">
                    A Whole arsenal of Security items, Better suited for
                    business owners.
                  </span>
                </div>
                <img
                  alt="image"
                  src="https://svgshare.com/i/15zk.svg"
                  className="products-image3"
                />
                <div className="products-container15">
                  <span className="products-text15">Package</span>
                  <div className="products-container16">
                    <span className="products-text16">Unknown</span>
                    <span className="products-text17">450</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products-container17">
            <div className="products-container18">
              <h1 className="products-text18">
                <span>Standard security package</span>
                <br></br>
              </h1>
              <span className="products-text21">
                Standard security items, Recommended for residential use.
              </span>
            </div>
            <img
              alt="image"
              src="https://svgshare.com/i/15yX.svg"
              className="products-image4"
            />
            <div className="products-container19">
              <span className="products-text22">Package</span>
              <div className="products-container20">
                <span className="products-text23">Hikivision</span>
                <span className="products-text24">300$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products-container21">
        <div className="products-container22">
          <div className="products-container23">
            <div className="products-container24">
              <h1 className="products-text25">
                <span>Basic security package</span>
                <br></br>
                <br></br>
              </h1>
              <span className="products-text29">
                Essential security items, Recommended for Small houses.
              </span>
            </div>
            <img
              alt="image"
              src="https://svgshare.com/i/1617.svg"
              className="products-image5"
            />
            <div className="products-container25">
              <span className="products-text30">Package</span>
              <div className="products-container26">
                <span className="products-text31">Generic</span>
                <span className="products-text32">150$</span>
              </div>
            </div>
          </div>
          <div className="products-container27">
            <div className="products-container28">
              <div className="products-container29">
                <h1 className="products-text33">
                  <span>Deluxe security package</span>
                  <br></br>
                </h1>
                <span className="products-text36">
                  A Whole arsenal of Security items, Better suited for business
                  owners.
                </span>
              </div>
              <img
                alt="image"
                src="https://svgshare.com/i/15zk.svg"
                className="products-image6"
              />
              <div className="products-container30">
                <span className="products-text37">Package</span>
                <div className="products-container31">
                  <span className="products-text38">Unknown</span>
                  <span className="products-text39">450</span>
                </div>
              </div>
            </div>
          </div>
          <div className="products-container32">
            <div className="products-container33">
              <h1 className="products-text40">
                <span>Standard security package</span>
                <br></br>
              </h1>
              <span className="products-text43">
                Standard security items, Recommended for residential use.
              </span>
            </div>
            <img
              alt="image"
              src="https://svgshare.com/i/15yX.svg"
              className="products-image7"
            />
            <div className="products-container34">
              <span className="products-text44">Package</span>
              <div className="products-container35">
                <span className="products-text45">Hikivision</span>
                <span className="products-text46">300$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Products
