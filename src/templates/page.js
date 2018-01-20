import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from "../components/page.module.css"
import { rhythm } from "../utils/typography"

import Helmet from "react-helmet"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <div className={styles.pageWrap}>
        <h1 className={styles.title}>
          <span className={styles.titleWrap} dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        </h1>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: currentPage.content }} />
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