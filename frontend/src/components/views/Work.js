import Posts from '../Posts';
import { getPostsbyTag } from '../../actions/posts';
import Footer from '../Footer';
import Header from '../Header';
import React, { useState, useEffect } from 'react';
const Work = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const get = async () => {
            const projects = await getPostsbyTag("project");
            setProjects(projects);
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
