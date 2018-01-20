import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jon Bukiewicz | Web Development | Chicago, Illinois"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        display: 'flex',
        margin: '0 auto',
        maxWidth: 1200,
        padding: '0px 1.0875rem 1.45rem 50px',
        paddingTop: 0,
        width: '90%'
      }}
    >
      <ul className="nav">
        <li><a href="/about">About</a></li>
        <li><a>Blog</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
      </ul>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
