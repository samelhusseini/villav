import React from 'react'
import ImageGallery from 'react-image-gallery'

import Layout from '../../components/Layout'

import "react-image-gallery/styles/css/image-gallery.css";

export default class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const images = [
        ]
        return (
            <Layout>
                <section>
                    <ImageGallery items={images} 
                        lazyLoad={false} showBullets={true}
                        showPlayButton={false} 
                        autoPlay={false} showThumbnails={false}
                        additionalClass="app-image-gallery" />
                </section>
            </Layout>
        )
    }
}
