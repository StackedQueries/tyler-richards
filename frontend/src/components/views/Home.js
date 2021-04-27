import Posts from '../Posts';
import Landing from '../Landing';
import '../../styles/landing.scss';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Footer from '../Footer'
import { Route, Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
const Home = () => {
    const [projects, setProjects] = useState([]);
    const dispatch = useDispatch()

    const posts = useSelector((state) => state.posts);
    useEffect(() => {
        const get = async () => {

            dispatch(getPosts())
        };
        get()
    }, [posts])


    return (
        <div>
            <Landing />
            <div className='page-content'>
                <h3 className='page-subheader'>Posts</h3>

                {posts && posts.length > 0 ? <Posts posts={posts} /> : <p>No posts Currently</p>}

                <h3 className='page-subheader'>Projects</h3>
                {projects && projects.length > 0 ? <Posts posts={projects} /> : <p>No projects Currently</p>}
            </div>
            <Footer />
        </div >
    )
}

export default Home
