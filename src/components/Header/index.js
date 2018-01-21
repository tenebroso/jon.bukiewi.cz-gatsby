import React, { Component } from 'react';
import Logo from '../Logo'
import styles from './header.module.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleSlide = this.toggleSlide.bind(this);
    this.state = {
      isActive: false,
    };
  }

  toggleSlide() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
    <header className={[styles.header, this.state.isActive ? styles.activeHeader : ''].join(' ')}>
      <div className={styles.pullDown}>
        <p>Stuff in here.</p>
      </div>
      <Logo handleClick={this.toggleSlide} />
    </header>
    )
  }
}

export default Header
