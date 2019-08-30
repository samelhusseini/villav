import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Carousel, { Modal, ModalGateway } from 'react-images';

import Layout from '../components/Layout'

export class IndexPageTemplate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      galleryOpen: false
    };
  }

  toggleGallery = () => {
    this.setState({
      galleryOpen: !this.state.galleryOpen
    })
  }

  render() {
    const {
      mainimage,
      title,
      heading,
      subheading,
      mainpitch,
      description,
      intro,
      main
    } = this.props;

    const { galleryOpen } = this.state;

    const images = [
      { caption: "Main view", source: '/img/listing/main.jpg' },
      { caption: "Outdoor space", source: '/img/listing/outdoor.jpg' },
      { caption: "Kitchen", source: '/img/listing/kitchen.jpg' },
      { caption: "Lounge room", source: '/img/listing/lounge.jpg' },
      { caption: "Patio", source: '/img/listing/patio.jpg' },
      { caption: "Pool side", source: '/img/listing/pool.jpg' },
      { caption: "Bedroom 1 - Vintage Soul", source: '/img/listing/bedroom1.jpg' },
      { caption: "Bedroom 2 - Blue Sea", source: '/img/listing/bedroom2.jpg' },
      { caption: "Bedroom 3 - Autumn Leaves", source: '/img/listing/bedroom3.jpg' },
      { caption: "Bedroom 4 - Seagulls", source: '/img/listing/bedroom4.jpg' },
      { caption: "Bedroom 5 - The Boat Cabin", source: '/img/listing/bedroom5.jpg' },
      { caption: "Bar", source: '/img/listing/bar.jpg' },
      { caption: "Fireplace", source: '/img/listing/fireplace.jpg' },
      { caption: "", source: '/img/listing/artwork.jpg' },
      { caption: "", source: '/img/listing/limonchello.jpg' },
    ];
    
    return (
      <div>
        <div className="index-gallery" style={{ cursor: 'pointer' }} onClick={this.toggleGallery}>
          <div className="columns is-hidden-tablet" style={{ height: '400px'}}>
            <div
              className="column is-full"
              style={{
                backgroundImage: `url(${
                  main.images[0].image.childImageSharp ? main.images[0].image.childImageSharp.fluid.src : main.images[0].image
                  })`,
                backgroundSize: 'cover',
                height: '400px'
              }}
            />
          </div>
          <div className="columns is-hidden-mobile" style={{ height: '500px'}}>
            <div className="column is-half">
              <div className="columns" style={{ height: '105%' }}>
                <div
                  className="column is-full"
                  style={{
                    backgroundImage: `url(${
                      main.images[0].image.childImageSharp ? main.images[0].image.childImageSharp.fluid.src : main.images[0].image
                      })`,
                    backgroundSize: 'cover'
                  }}
                />
              </div>
            </div>
            <div className="column is-half">
              <div className="columns" style={{ height: '500px' }}>
                <div className="column is-half">
                  <div className="columns" style={{ height: '55%' }}>
                    <div
                      className="column is-full"
                      style={{
                        backgroundImage: `url(${
                          main.images[1].image.childImageSharp ? main.images[1].image.childImageSharp.fluid.src : main.images[1].image
                          })`,
                        backgroundSize: 'cover'
                      }} />
                  </div>
                  <div className="columns" style={{ height: '50%' }}>
                    <div
                      className="column is-full"
                      style={{
                        backgroundImage: `url(${
                          main.images[2].image.childImageSharp ? main.images[2].image.childImageSharp.fluid.src : main.images[2].image
                          })`,
                        backgroundSize: 'cover'
                      }} />
                  </div>
                </div>
                <div className="column is-half">
                  <div className="columns" style={{ height: '55%' }}>
                    <div
                      className="column is-full"
                      style={{
                        backgroundImage: `url(${
                          main.images[3].image.childImageSharp ? main.images[3].image.childImageSharp.fluid.src : main.images[3].image
                          })`,
                        backgroundSize: 'cover'
                      }} />
                  </div>
                  <div className="columns" style={{ height: '50%' }}>
                    <div
                      className="column is-full"
                      style={{
                        backgroundImage: `url(${
                          main.images[4].image.childImageSharp ? main.images[4].image.childImageSharp.fluid.src : main.images[4].image
                          })`,
                        backgroundSize: 'cover'
                      }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='nav'>
              <div className='button'>View Photos</div>
          </div>
        </div>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="content">
                    <div className="content">
                      <div className="tile">
                        <h1 className="title">{mainpitch.title}</h1>
                      </div>
                      <div className="tile">
                        <h3 className="subtitle">{mainpitch.description}</h3>
                      </div>
                      <hr />
                      <div className="column">
                        {mainpitch.content}
  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ModalGateway>
          {galleryOpen ? (
            <Modal onClose={this.toggleGallery}>
              <Carousel views={images} />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    )
  }
}

IndexPageTemplate.propTypes = {
  mainimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  main: PropTypes.shape({
    images: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        mainimage={frontmatter.mainimage}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        main={frontmatter.main}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        mainimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        main {
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 1024, quality: 100) {
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
