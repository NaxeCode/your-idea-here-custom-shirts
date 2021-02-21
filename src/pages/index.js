import React from 'react'
import Logo from '../../img/yourideaherelogo-1.png'
import { navigate } from 'gatsby' //import navigate from gatsby

import '../style/Main.scss'

export default function Home() {
	return (
		<div className="Main">
			<mainSite className="Content">
				<img src={Logo} alt="Shirt that reads 'Your Idea Here'" />
				<h1 className="Title">Your Idea Here</h1>
				<h3 className="Text">Create Your Own Custom Shirt</h3>
				<button className="Button" onClick={() => editPage()}>
					<p className="ButtonTxt">Shop Now</p>
				</button>
			</mainSite>
		</div>
	)
}

function editPage(index) {
	navigate('/shop') //navigate to edit page
}
