import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content, { HTMLContent } from '../components/Content'

export const MoveTemplate = ({ 
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  return (
    <PageContent className="content" content={content} />
  )
}


MoveTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const MovePage = ({data}) => {
  const { markdownRemark: move } = data;

  return (
    <Layout>
      <SEO title={move.frontmatter.title} />
      <MoveTemplate 
        content={move.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )

}

export default MovePage

export const pageQuery = graphql`
  query movePage($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
      frontmatter {
        title
      }
    }
  }
`;