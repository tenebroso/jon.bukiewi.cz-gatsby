import React, { Component } from 'react'
import styles from './navigation.module.css'
import TiSocialTwitterCircular from 'react-icons/lib/ti/social-twitter-circular'
import TiSocialGithubCircular from 'react-icons/lib/ti/social-github-circular'
import TiSocialAtCircular from 'react-icons/lib/ti/social-at-circular'

class Navigation extends Component {
  constructor() {
    super();
    this.hoverOver = this.hoverOver.bind(this)
    this.hoverOut = this.hoverOut.bind(this);
    this.state = {
      isHovered: false
    }
  }

  hoverOver() {
    this.setState({isHovered: true})
  }

  hoverOut() {
      this.setState({isHovered: false})
  }

  render() {
    return (
    <div>
        <ul className={styles.nav}>
            <li onMouseEnter={this.hoverOver} onMouseLeave={this.hoverOut}>
                <a href="/about/" className={[this.state.isHovered ? styles.isHovered : '', styles.navLink].join(' ')}>
                    About
                </a>
            </li>
            <li onMouseEnter={this.hoverOver} onMouseLeave={this.hoverOut}>
                <a href="/blog/" className={[this.state.isHovered ? styles.isHovered : '', styles.navLink].join(' ')}>
                    Blog
                </a>
            </li>
            <li onMouseEnter={this.hoverOver} onMouseLeave={this.hoverOut}>
                <a href="/projects/" className={[this.state.isHovered ? styles.isHovered : '', styles.navLink].join(' ')}>
                    Projects
                </a>
            </li>
            <li onMouseEnter={this.hoverOver} onMouseLeave={this.hoverOut}>
                <a href="/contact/" className={[this.state.isHovered ? styles.isHovered : '', styles.navLink].join(' ')}>
                    Contact
                </a>
            </li>
        </ul>

        <ul className={styles.icons}>
            <li><a href="https://twitter.com/jonbukiewicz"><TiSocialTwitterCircular /></a></li>
            <li><a href="https://github.com/tenebroso"><TiSocialGithubCircular /></a></li>
            <li><a href="mailto:jon@bukiewi.cz"><TiSocialAtCircular /></a></li>
        </ul>
    </div>
    )
  }
}

export default Navigation