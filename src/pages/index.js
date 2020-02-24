import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs";

import Layout from "../components/layout"
import { graphql } from "gatsby"


export const query = graphql`
{
  prismic {
    allHomepages {
      totalCount
      edges {
        node {
          title
          subtitle
          content
          heroimage
        }
      }
    }
  }
}
`

const IndexPage = ({ data }) => (
  <Layout>
    {data.prismic.allHomepages.edges && <div className="not-found">
      <h1>News</h1>
      <div className="card_container">
        <div className="card">
          <img src={data.prismic.allHomepages.edges[0].node.heroimage.url} alt="Avatar" />
          <div className="container">
            <p>
              <b>{RichText.render(data.prismic.allHomepages.edges[0].node.title)} </b>
            </p>
            <p>{RichText.render(data.prismic.allHomepages.edges[0].node.content)}</p>
          </div>
        </div>
      </div>
    </div>}

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
