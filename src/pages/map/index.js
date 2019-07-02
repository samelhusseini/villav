import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <section style={{height: '700px'}}>
                    <div>
                        <div>
                            <iframe style={{height: '700px'}} src="https://www.google.com/maps/d/embed?mid=1TYvynLWLANtmlrqh7uFeQQUVmc99AZm4"
                                width="100%" height="700"></iframe>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
