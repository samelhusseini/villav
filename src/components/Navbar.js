import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import { FaInfo, FaMap, FaHeart, FaImages, FaIdBadge } from 'react-icons/fa';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar has-shadow is-spaced"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            <a className="navbar-item is-hidden-desktop" href="https://airbnb.com" target="_blank">
              <span className="button is-small is-primary">
                Book
              </span>
            </a>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start">
              <Link className="navbar-item" to="/about">
                <span className="icon has-text-primary"><FaInfo /></span>
                <span>About</span>
              </Link>
              <Link className="navbar-item" to="/map">
                <span className="icon has-text-success"><FaMap /></span>
                <span>Map</span>
              </Link>
              <Link className="navbar-item" to="/gallery">
                <span className="icon has-text-warning"><FaImages /></span>
                <span>Gallery</span>
              </Link>
              <Link className="navbar-item" to="/about">
                <span className="icon has-text-danger"><FaHeart /></span>
                <span>Reviews</span>
              </Link>
              {/* <Link className="navbar-item" to="/products">
                Products
              </Link> */}
              {/* <Link className="navbar-item" to="/blog">
                Blog
              </Link> */}
              <Link className="navbar-item" to="/contact">
                <span className="icon has-text-info"><FaIdBadge /></span>
                <span>Contact</span>
              </Link>
            </div>
            <div className="navbar-end has-text-centered is-hidden-touch">
              <div className="navbar-item">
                <div className="field is-grouped is-grouped-multiline">
                  <p className="control">
                    <a className="button is-medium is-primary" href="https://airbnb.com">
                      <strong>Book</strong>
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
