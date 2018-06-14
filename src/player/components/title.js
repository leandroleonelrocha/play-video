import React, { Component } from 'react';
import './video.css';

function Title (props){

	return (
		<div className="Title">
			<h2>{props.title}</h2>
		</div>
		)
}

export default Title;