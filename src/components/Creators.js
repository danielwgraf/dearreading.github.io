import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const CreatorGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.bio} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={{image: item.headshot}} />
            </div>
          </div>
          <p>{item.bio}</p>
        </section>
      </div>
    ))}
  </div>
)

CreatorGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      headshot: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      bio: PropTypes.string,
    })
  ),
}

export default CreatorGrid
