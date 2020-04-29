import React from 'react';
import Post from './post';
import Inputs from  './inputs';
import { useSelector } from 'react-redux';



function PostProps() {
    const posts = useSelector(state =>state.posts.posts);
    
return (
    <div className='layout-wrapper'>
        <Inputs />
        {posts.map(post => 
            <Post 
                author={post.author}
                content={post.content}
                image={post.image}
                date={post.date}
            />
            
        )}
    </div>
    )
};

export default PostProps;