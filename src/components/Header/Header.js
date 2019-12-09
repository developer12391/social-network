import React from 'react';
import logo from './compass.svg';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({isAuth,login,logout}) => {
    return (<header className={s.header}>
		<div className={s.appLogo}>
			<div>
				<img src={logo} alt="logo"/>
			</div>
			<div className={s.name}>
				Brexit
			</div>
		</div>
		<div className={s.appLogo}>
			<div >
				<NavLink to='/listing' className={s.addListing}>┿ Add Listing</NavLink>
			</div>

			<div className={s.loginBlock}>
				{isAuth ? <div>
					<div className={s.authName}>
						{login}
					</div>
					<div>
						<button className={s.button} onClick={logout}>Log out</button>
					</div>
				</div> : <NavLink to={'/login'}><button className={s.button}>Login</button></NavLink>}
			</div>
		</div>



    </header>);
}

export default Header;