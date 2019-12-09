import React from 'react';
import s from './Home.module.css';
import svg1 from "../Listing/Posts/svg1.svg";
import {NavLink} from "react-router-dom";
import Posts from "../Listing/Posts/Posts";

const Home = (props) => {
    let postsElements = props.listing.map(post=><Posts key={post.id} id={post.id}
                                                       title={post.title }
                                                       location={post.location}/>)
    return (
        <div>
            <div className={s.imageText}>
                <img className={s.image} src={require('./home.jpg')} alt="gg"/>
                <div><h2>World's Largest Classifieds and Listing Portal.</h2>

                    <p >
                        <NavLink to="/listing" className={s.button}>┿ Add Listing</NavLink>
                    </p>
                </div>
            </div>
            <div className={s.content}>
                <div className={s.filter}>
                    <h3>Filter the Listing</h3>
                </div>
                <div>
                    <h3 className={s.latestListing}>Latest Listing</h3>
                    <div className={s.lists}>
                        {postsElements}
                    </div>
                </div>

            </div>


        </div>

    );
}


export default Home;