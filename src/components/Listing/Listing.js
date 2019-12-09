import React from 'react';
import s from'./Listing.module.css';
import Posts from "./Posts/Posts";
import FormContainer from "./Form/FormContainer";

const Listing = (props) => {
        let postsElements = props.listing.map(post=><Posts key={post.id} id={post.id}
                                                               title={post.title }
                                                               location={post.location}/>)

    return (
        <div className={s.content}>
            <div>
                <FormContainer/>
                Filters
            </div>
            <div className={s.lists}>
                {postsElements}
            </div>

        </div>
    );
}

export default Listing;