import React from 'react'

const IndexPage = ({ data }) => {
    const page = data.wordpressPage
    return (
        <div className="siteWrap">
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
    )
}  

export default IndexPage

// Pull the homepage content from Wordpress
export const homePageQuery = graphql`
query homePageQuery {
  wordpressPage(slug: {eq: "home"}) {
    id
    title
    content
  }
}
`