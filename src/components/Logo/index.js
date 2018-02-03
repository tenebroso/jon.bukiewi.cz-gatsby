import React, { Component } from 'react';
import SiteTitle from '../SiteTitle'
import styles from './logo.module.css'

class Logo extends Component {

	constructor(props) {
		super();
		this.logoSvg = require('./logo.svg');
		this.props = props;
		this.handleLogoHover = this.handleLogoHover.bind(this);
		this.state = {
			logoHovered: false
		}
	}

	handleLogoHover(){
		this.setState({logoHovered: !this.state.logoHovered})
	}

	render(props){
		return (
			<div className={styles.container}>
				<a className={[styles.link, this.state.logoHovered ? styles.isHovered : ''].join(' ')} 
					onClick={this.props.handleClick} 
					onMouseEnter={this.handleLogoHover} 
					onMouseLeave={this.handleLogoHover}>
					<img src={this.logoSvg} className={styles.logo} />
				</a>
				<SiteTitle />
			</div>
		)
	}

}

export default Logo
