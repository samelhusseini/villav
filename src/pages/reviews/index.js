import React from 'react'

import Layout from '../../components/Layout'

export default class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <section className="section section--gradient">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="tile is-ancestor">
                                    <div className="tile is-vertical is-8">
                                        <div className="tile">
                                            <div className="tile is-parent is-vertical">
                                                <article className="tile is-child notification is-primary">
                                                    <p className="title">Lovely house</p>
                                                    <p className="subtitle">This is an excellent house with a fantastic view.</p>
                                                </article>
                                                <article className="tile is-child notification is-warning">
                                                    <p className="title">Spetses</p>
                                                    <p className="subtitle">Spetses is a great holiday island - boats to multiple beach's, great beach taverna's, plenty of restaurant choice, boutiques etc.</p>
                                                </article>
                                            </div>
                                            <div className="tile is-parent">
                                                <article className="tile is-child notification is-info">
                                                    <p className="title">Mamma Mia</p>
                                                    <p className="subtitle">The villa has a lovely homely feel to it, very "Mamma Mia" with stunning views and it's very quiet as it's away from the town centre and the noise of mopeds.</p>
                                                </article>
                                            </div>
                                        </div>
                                        <div className="tile is-parent">
                                            <article className="tile is-child notification is-danger">
                                                <p className="title">Wonderful</p>
                                                <p className="subtitle">Very clear guidelines on both the location and on the functionality of the house.</p>
                                                <div className="content">
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child notification is-success">
                                            <div className="content">
                                                <p className="title">Amazing</p>
                                                <p className="subtitle">The flat is well furnished and homely for a very relaxing and comfortable holiday.
                                                    It has the most amazing terrace with a view over the sea to mainland Greece.
                                                    It's also super clean and a lovely cleaner came to keep it looking lovely whilst we were there.
                                                    Also good air con to keep it cool. The pool is amazing, large and clean and with beautiful views over the sea.
                                            Spetses was a fabulous island to stay at, small but very family friendly with a great selection of shops and restaurants to visit each day ( flat is 5-10 mins walk on a hill).</p>
                                                <div className="content">
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
