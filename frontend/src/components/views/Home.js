import Posts from '../Posts';
import Landing from '../Landing';
import '../../styles/landing.scss';
import { getPostsbyTag } from '../../actions/posts';
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
    const state = useSelector((state) => state)
    useEffect(() => {
        dispatch(getPosts())
        const get = async () => {
            const projects = await getPostsbyTag("project");
            setProjects(projects);
        };
        get()
    }, [])

    console.log(state)


    return (
        <div>
            <Landing />
            <div className='page-content'>
                <div className='page-section row'>
                    <div className="content-card">
                        <img className="card-img" src="https://images.unsplash.com/photo-1620165362092-cf8f8d1ebe0b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="placeholder"></img>
                        <div className="card-info">
                            <h3 className="card-title">
                                Lorem Ipsum
                            </h3 >
                            <p className="card-text">
                                ellus. Nulla id risus quis tellus dignissim tempus. Mauris fringilla diam vel eros tempor, et dapibus purus pretium. Suspendisse tellus ipsum, eleifend vel mi sed, malesuada ornare velit. Sed varius sapien ut nulla condi                        </p>
                        </div>
                    </div>
                    <div className="content-card">
                        <img className="card-img" src="https://images.unsplash.com/photo-1622485755518-ee97059719b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="placeholder"></img>
                        <div className="card-info">
                            <h3 className="card-title">
                                liquam eu. Done
                            </h3 >
                            <p className="card-text">
                                met faucibus tellus. Nulla id risus quis tellus dig</p>
                        </div>
                    </div>
                    <div className="content-card">
                        <img className="card-img" src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="placeholder"></img>
                        <div className="card-info">
                            <h3 className="card-title">
                                Maecenas nec
                            </h3 >
                            <p className="card-text">
                                issim tempus. Mauris fringilla diam vel eros tempor, et dapibus purus pretium. Suspendisse tellus ipsum, eleifend vel mi sed, malesuada ornare velit. Sed varius sapien ut nulla condimentum tempus. Aliquam consectetur tincidunt suscipit. Etiam fringilla imperdiet tortor, eget viverra augue aliquam eu. D</p>
                        </div>
                    </div>
                </div>
                <div className="page-section">
                    <h3 className='page-subheader'>Articles</h3>
                    <Link to={`/blog/`} className='see-more'>See More {'>>'}</Link>
                    {posts && posts.length > 0 ? <Posts posts={posts} amount={3} /> : <p>No posts Currently</p>}
                </div>
                <h3 className='page-subheader'>Projects</h3>
                <Link to={`/work/`} className='see-more'>See More {'>>'}</Link>
                {projects && projects.length > 0 ? <Posts posts={projects} amount={3} /> : <p>No projects Currently</p>}
            </div>
            <Footer />
        </div >
    )
}

export default Home
