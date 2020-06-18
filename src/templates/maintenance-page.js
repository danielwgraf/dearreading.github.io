import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import BlankLayout from '../components/BlankLayout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

const Char = {
  color: 'black',
  fontWeight: '900',
  fontSize: '4rem',
  verticalAlign: 'top',
}

const Small = {
  fontSize: '3rem',
  textDecoration: 'underline',
  textDecorationColor: 'pink',
}

const Blue = {
  color: '#0f75bc',
}

const Red = {
  color: '#ed1c24',
}

const Yellow = {
  color: '#fff200',
}

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
        height: '100vh',
      }}
    >
      <div
        style={{
          backgroundColor: 'blue',
          display: 'flex',
          height: '100%',
          width: '100%',
          // height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            backgroundColor: 'green',
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
            <span style={{...Char, ...Blue}}>#</span>
            <span style={{...Char, ...Red, ...Small}}>U</span>
            <span style={Char}>N</span>
            <span style={Char}>D</span>
            <span style={Char}>E</span>
            <span style={Char}>R</span>

            <span style={Char}>C</span>
            <span style={Char}>O</span>
            <span style={Char}>N</span>
            <span style={Char}>S</span>
            <span style={Char}>T</span>
            <span style={Char}>R</span>
            <span style={Char}>U</span>
            <span style={Char}>C</span>
            <span style={Char}>T</span>
            <span style={Char}>I</span>
            <span style={Char}>O</span>
            <span style={Char}>N</span>
          </h1>
        </div>
        <div
        >
          <iframe 
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/582379128&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
          </iframe>
          {/* <div
            style={{
              fontSize: '10px',
              color: '#cccccc',
              lineBreak: 'anywhere',
              wordBreak: 'normal',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
              fontWeight: 100
            }}>
              <a 
                href="https://soundcloud.com/dearreading"
                title="DearReading"
                target="_blank"
                style={{color: '#cccccc', textDecoration: 'none'}}>
                DearReading
              </a> 
              · 
              <a
                href="https://soundcloud.com/dearreading/sets/season-2"
                title="SEASON 2"
                target="_blank"
                style={{color: '#cccccc', textDecoration: 'none'}}>
                  SEASON 2
              </a>
          </div> */}
        </div>
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

