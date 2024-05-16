import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Products from './views/products'
import AboutUs from './views/about-us'
import ContactUs from './views/contact-us'
import Blog from './views/blog'
import FAQ from './views/faq'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Products} exact path="/products" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={Blog} exact path="/blog" />
        <Route component={FAQ} exact path="/faq" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
