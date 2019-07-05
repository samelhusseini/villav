import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
      <section className="hero is-fullheight-with-navbar is-danger is-bold">
          <div className="hero-body">
              <div className="container has-text-centered">
                  <h1 className="title">
                      NOT FOUND</h1>
                  <h2 className="subtitle">
                  You just hit a route that doesn&#39;t exist... the sadness. </h2>

                  <Link to="/" className="button is-primary">Back to Home</Link>
              </div>
          </div>
      </section>
  </Layout>
)

export default NotFoundPage
