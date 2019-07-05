import React from 'react'

import Layout from '../../../components/Layout'

export default class Ferry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loadingSchedule: true,
            rand: Math.random()
        }
    }

    onLoaded = () => {
        this.setState({
            loadingSchedule: false
        })
    }

    render() {
        const { loadingSchedule, rand } = this.state;
        const date = new Date();
        const todayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const lang = 'en';

        const gtpURL = `http://www.gtp.gr/services/GoReturnRoutesForLocation.asp?locationName=Σπέτσες&language=${lang}&RequestID=EOT&travelDateDep=${todayDate}&travelDateArr=${todayDate}&rand=${rand}`;
        return (
            <Layout>
                <section className="section section--gradient">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                    Ferry Schedule
                                </h2>
                                {loadingSchedule ? <progress className="progress is-small is-info" max="100"></progress> : undefined}
                                <iframe onLoad={this.onLoaded} key="gtpIframe" width="100%" src={gtpURL} style={{ height: '2400px', display: 'block' }} />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
