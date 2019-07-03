import React from 'react'
import ImageGallery from 'react-image-gallery'

import Layout from '../../components/Layout'

import "react-image-gallery/styles/css/image-gallery.css";

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const images = [
            {
                original: '/img/main.jpg',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
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
