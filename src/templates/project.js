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
            <div dangerouslySetInnerHTML={{ __html: project.acf.short_description }} />

            <div dangerouslySetInnerHTML={{ __html: project.acf.highlights }} />

            <div dangerouslySetInnerHTML={{ __html: project.acf.services }} />

            <div>
                <img src={project.acf.mobile_image.source_url} />
            </div>

            <div>
                <img src={project.acf.laptop_image.source_url} />
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