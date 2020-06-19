import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import BlankLayout from '../components/BlankLayout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export class MaintenancePageTemplate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      width: 0, // or your default width here
    }
  }

  componentDidMount() {
    this.handleWindowSizeChange() // Set width
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const podcastWidth = this.state.width < 480 ? '100%' : this.state.width < 760 ? '60%' : '30%';

    return (
      <div className="maintenance-wrapper">
        <div
          className="content-wrapper full-width-image margin-top-0"
        >
          <div
            className="wrapper"
          >
            <div className="text-wrapper">
              <h1 className="dearreading-header has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
                <span className="char blue">#</span>
                <span className="char">U</span>
                <span className="char red small underline accentYellow">N</span>
                <span className="char">D</span>
                <span className="char">E</span>
                <span className="char blue">R</span>
                <span> </span>
                <span className="char red">C</span>
                <span className="char yellow small overline">O</span>
                <span className="char">N</span>
                <span className="char blue">S</span>
                <span className="char">T</span>
                <span className="char red">R</span>
                <span className="char">U</span>
                <span className="char">C</span>
                <span className="char blue small overline accentRed">T</span>
                <span className="char yellow">I</span>
                <span className="char">O</span>
                <span className="char red small underline accentYellow">N</span>
              </h1>
            </div>
            <div className="soundcloud-wrapper"
            >
              <div className="topline"/>
              <iframe
                width={podcastWidth}
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
    );
  }
}

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

