import React, { Component } from "react"
import PropTypes from "prop-types"

class ProjectTemplate extends Component {
  render() {
    const project = this.props.data.wordpressWpProjects

    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: project.title }} />
        <div dangerouslySetInnerHTML={{ __html: project.content }} />
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
    wordpressWpProjects(id: { eq: $id }) {
      title
      content
    }
  }
`