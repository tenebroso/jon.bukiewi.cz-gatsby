import React, { Component } from "react"
import PropTypes from "prop-types"

import Helmet from "react-helmet"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <div className="siteWrap">
        <div className="pageHeader">
          <h1 className="pageTitle" dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </div>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`