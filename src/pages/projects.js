import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './projects.module.css'

const Projects = ({ data }) => (
  <div className={styles.projects}>
    <div className="pageHeader">
      <h1 className="pageTitle">Projects</h1>
    </div>
      {data.allWordpressWpProjects.edges.map(({ node }) => (
        <div key={node.id} className={styles.project}>
          <Link to={`${node.slug}`}>
            <div className={styles.bg} style={{
                backgroundImage: 'url(' + node.featured_media.source_url + ')'
            }}>
              <div className={styles.titleWrap}>
                <h3 className={styles.title}>{node.title}</h3>
                <p className={styles.subtitle}>{node.acf.subtitle}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
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
          featured_media {
            source_url
          }
          acf {
            subtitle
          }
        }
      }
    }
  }
`