import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content, { HTMLContent } from '../components/Content'

export const StillTemplate = ({ 
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  return (
    <PageContent className="content" content={content} />
  )
}


StillTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const StillPage = ({data}) => {
  const { markdownRemark: still } = data;

  return (
    <Layout>
      <SEO title={still.frontmatter.title} />
      <StillTemplate 
        content={still.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )

}

export default StillPage

export const pageQuery = graphql`
  query StillPage($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
      frontmatter {
        title
      }
    }
  }
`;