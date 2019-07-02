import React from 'react'
//import { Link } from 'gatsby'

import logo from '../img/logo.svg'

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Villa V"
            style={{ width: '8em', height: '6em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              {/* <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div> */}
              <div className="column social">
                <a title="facebook" href="https://facebook.com">
                  <FaFacebook style={{ width: '1em', height: '1em' }} />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <FaTwitter style={{ width: '1em', height: '1em' }} />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <FaInstagram style={{ width: '1em', height: '1em' }} />
                </a>
              </div>
            </div>
          </div>
          <div className="column is-text-small">
            Copyright 2019 - Villa V
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
