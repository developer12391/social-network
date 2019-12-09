import React from 'react';
import s from'./Navbar.module.css';
import Links from "./Links/Links";
import { slide as Menu } from "react-burger-menu";

const Navbar = (props) => {

	let items1 = props.state.links.slice(0, 4).map(link =><Links className="menu-item" key={link.id} id={link.id} name={link.name } to={link.to}/>);
	let items2 = props.state.links.slice(6, 8).map(link =><Links className="menu-item" key={link.id} id={link.id} name={link.name } to={link.to}/>);
	let items3 = props.state.links.slice(8, 11).map(link =><Links className="menu-item" key={link.id} id={link.id} name={link.name } to={link.to}/>);

		return (
			<Menu width={'18%'} isOpen={ false } disableCloseOnEsc disableOverlayClick={false}>
			<nav className={s.nav}>
				{items1}
				<hr />
				{items2}
				<hr/>
				{items3}
			</nav>
			</Menu>
		);
}


export default Navbar;