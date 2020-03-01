import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'



const WorksPage = ({data}) => {
    const works = data.allMarkdownRemark.edges.map(({node}) => {
        return (
            <div className="works-item">
                <Link to={node.fields.slug}>
                    <Img fluid={node.frontmatter.mainImage.childImageSharp.fluid} />
                    <h5>{node.frontmatter.title}</h5>
                </Link>
            </div>
        )
    }
    );
    return (
    <Layout>
        <SEO title="Home" />
        <div className="works-container">
            {works}
        </div>
        
    </Layout>
    )
}

export default WorksPage

export const worksPageQuery = graphql`
query WorksQuery {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {regex: "/still|move/"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            mainImage {
              childImageSharp {
                fluid(fit: COVER, cropFocus: CENTER, maxHeight: 300, maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }  
`