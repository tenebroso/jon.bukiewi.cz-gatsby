import React from 'react'
import styles from './index.module.css'

const Logo = () => (
  <div>
      <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1056 816" height="816" width="1056">
		<defs>
			<clipPath id="a">
				<path d="M0 612h792V0H0z"/>
			</clipPath>
		</defs>
		<g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 816)">
			<path d="M381.482 343.237c2.626 0 2.865-2.417 2.875-3.15V285.85c-.01-.74-.25-3.157-2.875-3.157-.176 0-.36.01-.547.03-15.104 2-26.495 15-26.495 30.242 0 15.237 11.386 28.237 26.474 30.238.2.023.39.034.568.034m3.473 8.725c-21.503 0-38.997-17.495-38.997-38.997 0-21.503 17.494-38.997 38.997-38.997s38.997 17.494 38.997 38.997c0 21.502-17.494 38.997-38.997 38.997" fill="#c1b581"/>
		</g>
	</svg>
  </div>
)

export default Logo
