import React, { Component } from 'react'
import TiSocialTwitterCircular from 'react-icons/lib/ti/social-twitter-circular'
import TiSocialGithubCircular from 'react-icons/lib/ti/social-github-circular'
import TiSocialAtCircular from 'react-icons/lib/ti/social-at-circular'

import styles from './navigation.module.css'

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

  makeLinks(pages) {
      var _this = this;
      return pages.map(function(page){
            return <li onMouseEnter={_this.hoverOver} onMouseLeave={_this.hoverOut}>
            <a href={`/${page}/`} className={[_this.state.isHovered ? styles.isHovered : '', styles.navLink].join(' ')}>
                {page}
            </a>
        </li>
      })
  }

  render() {
    return (
    <div>
        <ul className={styles.navList}>
            
            {this.makeLinks(['about', 'blog', 'projects', 'contact'])}

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