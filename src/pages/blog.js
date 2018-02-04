import React from 'react'
import Link from 'gatsby-link'
import { format } from 'date-fns'
import addDays from 'date-fns/add_days'
import styles from './blog.module.css'


const Blog = ({ data }) => (
  <div className="siteWrap">
    <div className="pageHeader">
      <h1 className="pageTitle">Blog</h1>
    </div>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.id} className={styles.post}>
          <Link to={`${node.slug}`}>
            <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: node.title }} />
            <div className={styles.date}>{format(addDays(new Date(node.date), 1), ("MMM DD, YYYY"))}</div>
          </Link>
        </div>
      ))}
  </div>
)

export default Blog

export const pageQuery = graphql`
  query getPostQuery {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          id
          title
          slug
          date
        }
      }
    }
  }
`