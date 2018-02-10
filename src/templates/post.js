import React, { Component } from "react"
import Helmet from 'react-helmet'
import PropTypes from "prop-types"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <div className="siteWrap">
          <Helmet
          title={`${post.title} / Blog / Jon Bukiewicz`}
          meta={[
            { name: 'description', content: post.excerpt },
            { property: 'og:type', content: 'article' },
            { property: 'og:title', content: post.title },
            { property: 'og:image', content: '' },
            {
              property: 'article:author',
              content: 'https://facebook.com/jon.bukiewicz'
            },
            {
              property: 'article:published_time',
              content: post.date
            },
            { name: 'twitter:description', content: post.excerpt },
            { name: 'twitter:title', content: post.title }
          ]}
        />
        <div className="pageHeader">
          <h1 className="pageTitle" dangerouslySetInnerHTML={{ __html: post.title }} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      date
      content
      excerpt
    }
  }
`