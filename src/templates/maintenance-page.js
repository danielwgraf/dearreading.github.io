import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import BlankLayout from '../components/BlankLayout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

const Char = {
  fontFamily: 'Raleway, sans-serif',
  color: 'black',
  // fontWeight: '900',
  fontSize: '5rem',
  verticalAlign: 'top',
}

const Small = {
  fontSize: '4rem',
}

const Underline = {
  textDecoration: 'underline',
  textDecorationColor: 'black',
}

const Overline = {
  textDecoration: 'overline',
  textDecorationColor: 'black',
  verticalAlign: 'bottom',
}

const AccentBlue = {
  textDecorationColor: '#0f75bc',
}

const AccentRed = {
  textDecorationColor: '#ed1c24',
}

const AccentYellow = {
  textDecorationColor: '#fff200',
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
          display: 'flex',
          height: '100%',
          width: '100%',
          // height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            height: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              // color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              alignItems: 'center',
              textAlign: 'center',
              verticalTextAlign: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{...Char, ...Blue}}>#</span>
            <span style={{...Char}}>U</span>
            <span style={{...Char, ...Red, ...Small, ...Underline, ...AccentYellow}}>N</span>
            <span className='mytest' style={Char}>D</span>
            <span style={Char}>E</span>
            <span style={{...Char, ...Blue}}>R</span>
            <span> </span>
            <span style={{...Char, ...Red}}>C</span>
            <span style={{...Char, ...Yellow, ...Small, ...Overline}}>O</span>
            <span style={Char}>N</span>
            <span style={{...Char, ...Blue}}>S</span>
            <span style={Char}>T</span>
            <span style={{...Char, ...Red}}>R</span>
            <span style={Char}>U</span>
            <span style={Char}>C</span>
            <span style={{...Char, ...Blue, ...Small, ...Overline, ...AccentRed}}>T</span>
            <span style={{...Char, ...Yellow}}>I</span>
            <span style={Char}>O</span>
            <span style={{...Char, ...Red, ...Small, ...Underline, ...AccentYellow}}>N</span>
          </h1>
        </div>
        <div
          style={{
            width: '100%',
            height: '33vh',
            backgroundColor: 'white',
            // borderTopColor: '#F50',
            // borderTopWidth: '3px',
            // borderTopStyle: 'solid',
            // boxSizing: 'border-box',
            // borderTopWidth: '1px',
            // borderTopColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <div 
            style={{
              height: '3px',
              width: '100%',
              backgroundColor: '#F50',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          <iframe
            width="30%"
            height="100%"
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

