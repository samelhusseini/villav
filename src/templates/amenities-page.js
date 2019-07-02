import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const AmenitiesPageTemplate = ({
  title,
  amenities
}) => (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-full">
            <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h1>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <div className="section">
              <div className="column">
                <h2 className="title is-size-4">Basic</h2>
              </div>
              {amenities.basic.map((item, index) => (
                <div key={item.text} className="column">
                  <span className="subtitle">{item.text}</span>
                  <p>{item.subtext}</p>
                  {index !== amenities.basic.length - 1 ?
                    <div className="amenities-hr">
                      <div className="hr" />
                    </div>
                    : undefined}
                </div>
              ))}
            </div>
          </div>

          <div className="column is-half">
            <div className="section">
              <div className="column">
                <h2 className="title is-size-4">Facilities</h2>
              </div>
              {amenities.facilities.map((item, index) => (
                <div key={item.text} className="column">
                  <span className="subtitle">{item.text}</span>
                  <p>{item.subtext}</p>
                  {index !== amenities.basic.length - 1 ?
                    <div className="amenities-hr">
                      <div className="hr" />
                    </div>
                    : undefined}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <div className="section">
              <div className="column">
                <h2 className="title is-size-4">Dining</h2>
              </div>
              {amenities.dining.map((item, index) => (
                <div key={item.text} className="column">
                  <span className="subtitle">{item.text}</span>
                  <p>{item.subtext}</p>
                  {index !== amenities.basic.length - 1 ?
                    <div className="amenities-hr">
                      <div className="hr" />
                    </div>
                    : undefined}
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  )

AmenitiesPageTemplate.propTypes = {
  title: PropTypes.string,
  amenities: PropTypes.shape({
    basic: PropTypes.array,
    facilities: PropTypes.array,
    dining: PropTypes.array,
  }),
}

const AmenitiesPage = ({ data }) => {
  if (!data) return <Layout />
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AmenitiesPageTemplate
        title={frontmatter.title}
        amenities={frontmatter.amenities}
      />
    </Layout>
  )
}

AmenitiesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AmenitiesPage

export const pageQuery = graphql`
  query AmenitiesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "amenities-page" } }) {
      frontmatter {
        title
        amenities {
          basic {
            text
            subtext
          }
          facilities {
            text
            subtext
          }
          dining {
            text
            subtext
          }
        }
      }
    }
  }
`
