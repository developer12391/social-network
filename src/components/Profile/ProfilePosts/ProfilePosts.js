import React from 'react';
import Posts from "../../Listing/Posts/Posts";
import s from'./ProfilePosts.module.css';

const ProfilePosts = (props) => {

    let postsElements = props.postsData.map(p => <Posts title={p.title} />);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default ProfilePosts;