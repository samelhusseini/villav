import React from 'react'
//import { Link } from 'gatsby'

import logo from '../img/logo.svg'

import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram } from 'react-icons/fa';

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
                <a title="whatsapp" href="https://wa.me/17347264265">
                  <FaWhatsapp size="1.5em" style={{ width: '1.5em', height: '1.5em', color: '#25D366' }} />
                </a>
                {/* <a title="facebook" href="https://facebook.com">
                  <FaFacebook size="1.5em" style={{ width: '1.5em', height: '1.5em', color: '#0080F8' }}  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <FaTwitter size="1.5em" style={{ width: '1.5em', height: '1.5em', color: '#40B1E1' }} />
                </a> */}
                <a title="instagram" href="https://instagram.com/villav.gr">
                  <FaInstagram size="1.5em" style={{ width: '1.5em', height: '1.5em', color: '#D42B5D' }} />
                </a>
              </div>
            </div>
          </div>
          <div className="column" style={{ fontSize: '12px' }}>
            Copyright © 2018-2019 - Villa V
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
