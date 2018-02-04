import React from 'react'
import Link from 'gatsby-link'
import ClockIcon from "react-icons/lib/fa/clock-o"

import { format } from 'date-fns'

const Projects = ({ data }) => (
  <div className="blog page-wrap">
    <h1 className="page-title">Projects</h1>
    <div className="blog-post-list">
      {data.allWordpressWpProjects.edges.map(({ node }) => (
        <div key={node.id} className="post">
          <Link to={`${node.slug}`}>
            <h3 className="post-title">{node.title}</h3>
            {node.acf.subtitle}
          </Link>
        </div>
      ))}
    </div>
  </div>
)

export default Projects

export const projectsQuery = graphql`
  query getProjectsQuery {
    allWordpressWpProjects {
      edges {
        node {
          id
		      slug
          title
          acf {
            subtitle
          }
        }
      }
    }
  }
`