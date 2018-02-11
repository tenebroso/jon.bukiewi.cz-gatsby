import React, { Component } from 'react'
import TiSocialTwitterCircular from 'react-icons/lib/ti/social-twitter-circular'
import TiSocialGithubCircular from 'react-icons/lib/ti/social-github-circular'
import TiSocialAtCircular from 'react-icons/lib/ti/social-at-circular'
import Link from "gatsby-link";

import styles from './navigation.module.css'

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.navHoverOver = this.navHoverOver.bind(this)
    this.navHoverOut = this.navHoverOut.bind(this);
    this.state = {
      isNavHovered: false
    }
  }

  navHoverOver() {
    this.setState({isNavHovered: true})
  }

  navHoverOut() {
    this.setState({isNavHovered: false})
  }

  makeLinks(pages) {
      const parent = this;
      return pages.map(function(page, idx){
            return <li onMouseEnter={parent.navHoverOver} onMouseLeave={parent.navHoverOut} key={idx}>
                    <Link to={page === 'home' ? {pathname: `/`} : {pathname: `/${page}/`}} onClick={parent.props.closeNav} className={[parent.state.isNavHovered ? styles.isHovered : '', styles.navLink].join(' ')}>
                        {page}
                    </Link>
                </li>
      })
  }

  render() {
    return (
    <div className={styles.navList__container}>
        <ul className={styles.navList}>
            {this.makeLinks(['home', 'blog', 'projects', 'contact'])}
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