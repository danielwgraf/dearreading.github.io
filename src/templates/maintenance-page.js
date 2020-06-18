import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import BlankLayout from '../components/BlankLayout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const MaintenancePageTemplate = ({
  title,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        // backgroundImage: `url(${
        //   !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        // })`,
        // backgroundPosition: `top left`,
        // backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            // color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          Site is Currently Under Development
        </h1>
      </div>
    </div>
  </div>
)

MaintenancePageTemplate.propTypes = {
  title: PropTypes.string,
}

const MaintenancePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <BlankLayout>
      <MaintenancePageTemplate
        title={frontmatter.title}
      />
    </BlankLayout>
  )
}

MaintenancePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MaintenancePage

export const pageQuery = graphql`
  query MaintenancePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "maintenance-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
