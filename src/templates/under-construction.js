import React from 'react'

import '../components/all.sass'
import logo from '../img/logo.svg'

export default class UnderConstruction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <section className="hero is-fullheight is-danger is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <img src={logo} alt="Villa V" style={{ width: '300px' }} />
                        <h1 className="title">
                            is under construction</h1>
                        <h2 className="subtitle">
                            Please check back soon.</h2>
                        
                    </div>
                </div>
            </section>
        )
    }
}
