import React, { Component } from 'react';
import Logo from '../Logo'
import styles from './header.module.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleSlide = this.toggleSlide.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.state = {
      isActive: false,
      isHovered: false
    };
  }

  toggleSlide() {
    this.setState({ isActive: !this.state.isActive });
  }

  handleHover() {
    this.setState({isHovered: !this.state.isHovered})
  }

  render() {
    return (
    <header className={[
        styles.header, 
        this.state.isActive ? styles.activeHeader : '', 
        this.state.isHovered ? styles.isHovered : ''].join(' ')}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}>
      <div className={styles.pullDown}>
        <p>Stuff in here.</p>
      </div>
      <Logo handleClick={this.toggleSlide} handleHover={this.handleHover} />
    </header>
    )
  }
}

export default Header
