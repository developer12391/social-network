import React from 'react';
import s from './Links.module.css';
import {NavLink} from "react-router-dom";
import svg1 from "./svg/svg1";
import svg2 from "./svg/svg2";
import svg3 from "./svg/svg3";
import svg4 from "./svg/svg4";
import svg5 from "./svg/svg5";
import svg6 from "./svg/svg6";
import svg7 from "./svg/svg7";
import svg8 from "./svg/svg8";
import svg9 from "./svg/svg9";
import svg10 from "./svg/svg10";
import svg11 from "./svg/svg11";



class Links extends React.Component {
	constructor(props) {
		super(props);
		this.mouseOver= this.mouseOver.bind(this);
		this.mouseOut = this.mouseOut.bind(this);
		this.myClass = 'my-class';
		this.state = {
			hover: false
		};
	}

	mouseOver = (e) => {
		this.setState({hover: true});

	}
	mouseOut(e) {
		this.setState({hover: false});
	}


	render() {
		let id = this.props.id;
		const Map = {
			"svg1": svg1,
			"svg2": svg2,
			"svg3": svg3,
			"svg4": svg4,
			"svg5": svg5,
			"svg6": svg6,
			"svg7": svg7,
			"svg8": svg8,
			"svg9": svg9,
			"svg10": svg10,
			"svg11": svg11,
		}

		let name = "svg"+id;
		let Tag = Map[name];

		return (
			<div onMouseOver={this.mouseOver.bind(this)} onMouseLeave={this.mouseOut.bind(this)}>
				<NavLink id="nav" activeStyle={{color:"#F22172", fontWeight:"bold"}} to={this.props.to} className={s.link} >
					<p className={s.logo}>
							{this.state.hover ? <Tag col="#F22172" />  :  <Tag col="black" />}

					</p>{this.props.name}</NavLink>
			</div>

		);
	}


}


export default Links;