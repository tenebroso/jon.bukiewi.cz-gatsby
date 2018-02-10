import React, { Component } from 'react'
import Logo from '../Logo'
import Navigation from '../Navigation'
import styles from './header.module.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggleSlide = this.toggleSlide.bind(this)
    this.handleHeaderHover = this.handleHeaderHover.bind(this)
    this.state = {
      isActive: false,
      isHovered: false
    }
  }

  toggleSlide() {
    this.setState({ isActive: !this.state.isActive })
  }

  handleHeaderHover() {
    this.setState({isHovered: !this.state.isHovered})
  }

  render() {
    return (
    <header className={[
        styles.header, 
        this.state.isActive ? styles.activeHeader : '', 
        this.state.isHovered ? styles.isHovered : ''].join(' ')}
        onMouseEnter={this.handleHeaderHover}
        onMouseLeave={this.handleHeaderHover}>
      <div className={styles.pullDown}>
        <div onClick={this.toggleSlide} onMouseOver={this.handleHeaderHover} className="header-close"><div className="close-btn"><span></span></div></div>
        <Navigation closeNav={this.toggleSlide} />
      </div>
      <Logo handleClick={this.toggleSlide} handleHover={this.handleHeaderHover} />
    </header>
    )
  }
}

export default Header
