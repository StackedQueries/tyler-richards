import Posts from '../Posts';

import Footer from '../Footer';
import Header from '../Header';
import { getPosts } from '../../controllers/posts'
import React, { useState, useEffect } from 'react';
const Work = () => {
    const [posts, setPosts] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const get = async () => {
            const { postsFromServer, projectsFromServer } = await getPosts();
            setPosts(postsFromServer);
            setProjects(projectsFromServer);
        };
        get()
    }, [])

    return (
        <div>
            <Header />
            <div className='page-content'>
                <h1 className='page-subheader'>Projects</h1>
                {projects && projects.length > 0 ? <Posts posts={projects} /> : <p>No projects Currently</p>}
            </div>
            <Footer />
        </div>
    )
}

export default Work
