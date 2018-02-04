import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from "./project.module.css"

class ProjectTemplate extends Component {
  render() {
    const project = this.props.data.wordpressWpProjects

    return (
      <div>
        <div className={styles.header} style={{
                backgroundImage: 'url(' + project.featured_media.source_url + ')'
            }}>
            <div className={styles.headerTitle}>
                <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: project.title }} />
                <br />
                <span className={styles.description} dangerouslySetInnerHTML={{__html: project.acf.subtitle}} />
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.intro}>
                <div className={styles.introText} dangerouslySetInnerHTML={{ __html: project.acf.short_description }} />
            </div>

            <div className={styles.row}>
                <img src={project.acf.laptop_image.source_url} />  
            </div>

            <div className={styles.row}>
                <div className={[styles.listContainer, styles.listContainerLeft].join(' ')}>
                    <h3 className={styles.heading}>Services</h3>
                    <div className={styles.list} dangerouslySetInnerHTML={{ __html: project.acf.services }} />
                </div>
                <img src={project.acf.mobile_image.source_url} />
                <div className={styles.listContainer}>
                    <h3 className={styles.heading}>Technologies Used</h3>
                    <div className={styles.list} dangerouslySetInnerHTML={{ __html: project.acf.highlights }} />
                </div>
            </div>

            <div className={[styles.row, styles.rowColumn].join(' ')}>
              <p className={styles.visitTitle}>Visit the site:</p>
              <p className={styles.visitLink}>
                <a rel="nofollow" target="_blank" href={project.acf.site_url}>{project.acf.site_url}</a>
              </p>
            </div>

           
        </div>
      </div>
    )
  }
}
//<img src={project.image.sizes.thumbnail} />

ProjectTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default ProjectTemplate

export const pageQuery = graphql`
  query currentProjectsQuery($id: String!) {
    wordpressWpProjects(id: {eq: $id}) {
      title
      content
      featured_media {
          source_url
      }
      acf {
        subtitle
        short_description
        highlights
        services
        site_url
        mobile_image {
         source_url
        }
        laptop_image {
         source_url
        }
      }
    }
  }
`