
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import './Page.css'
import bg from '../images/bg.jpeg';


function Home (props){

	const header_height = useRef(null);
	const [Height, setHeight] = useState({});
	useEffect(() => {
		const height = header_height.current.offsetHeight + 300;
		setHeight({
			height: height + "px"
		})
	}, [header_height]);

	return (
		<>
		<svg style={Height} id='header_bg' className='homebg' viewBox="0 0 500 80" preserveAspectRatio="none">
			<defs>
				<radialGradient id="Gradient"
						cx="0.5" cy="0.5" r="0.5" fx="0.75" fy="0.25">
					<stop offset="0%" stopColor="#dcdcdc"/>
					<stop offset="100%" stopColor="#dcdcdc"/>

				</radialGradient>
			</defs>
  			<path d="M0,0 L0,55 Q250,65 500,55 L500,0 Z" fill="url(#Gradient)"/>{/*fill="#e2fafa"*/}
		</svg>
		<div ref={header_height} id='header' className="header1">
			<div className='titley'>
        <h1 style={{fontSize:"45px"}}>{props.name ? `Welcome  ${props.name}` : "Login please"}</h1>
				<p>
					<span>Your Requests - N/A</span><br/><br/>
					<span>Your Donations - N/A</span><br/><br/>
					<span>Your Blood Group - N/A</span><br/><br/>
				</p>
			</div>
			<div className='head_Img'>
				<img className='bldrop' src={bg} alt=""/>
				<img src={process.env.PUBLIC_URL + '/assets/hand.png'} alt=""/>
			</div>
		</div>
		</>
	);
};

export default Home;
