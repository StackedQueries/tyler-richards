import Posts from '../Posts'

import Header from '../Header';
import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import { Link } from "react-router-dom";

import { getPosts } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux'

const Blog = () => {
    const dispatch = useDispatch()

    const posts = useSelector((state) => state.posts);
    useEffect(() => {
        const get = async () => {
            dispatch(getPosts())
        };
        get()
    }, [])

    return (
        <div>
            <Header />
            <Link to="/makePost" className="custom-btn btn-12 absolute"><span>Click!</span><span>Make Post &#x022B3;</span></Link>
            <div className='page-content'>
                <h1 className='page-subheader'>Blog</h1>
                {posts && posts.length > 0 ? <Posts posts={posts} /> : <p>No posts Currently</p>}

            </div>
            <Footer />
        </div>
    )
}

export default Blog
