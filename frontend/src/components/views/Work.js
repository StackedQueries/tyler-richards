import Posts from '../Posts';
import { getPostsbyTag } from '../../actions/posts';
import Footer from '../Footer';
import Header from '../Header';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                <h1 className='page-header'>Projects</h1>
                {projects && projects.length > 0 ?
                    projects.reverse().map((project, index) => {
                        return <Link to={`/blog/${project.id}`} key={index} className='project-title'>{project.title}</Link>
                    })
                    : <p>No projects Currently</p>}
            </div>
            <Footer />
        </div>
    )
}

export default Work
