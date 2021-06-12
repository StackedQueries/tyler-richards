import React, { useState, useEffect } from "react";
import {
    Link,
    useParams
} from "react-router-dom";
import Footer from '../Footer';
import edjsParser from "editorjs-parser";

import { getPost } from '../../actions/posts'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import '../../styles/post.scss'
const Post = () => {
    const parser = new edjsParser("");
    const [body, setBody] = useState('loading...')
    const [post, setPost] = useState('loading')
    const { postId } = useParams();

    useEffect(() => {
        const get = async () => {
            const post = await getPost(postId)
            setPost(post)
            console.log(post)
            const body = await parser.parse(post.body)
            setBody(body)
        }
        get()


    }, [])
    return (
        <>
            <Header />
            <div className='page-content'>
                {post.image?.url ? <img height="100vh" src={"http://localhost:5000/" + post.image.url}></img>
                    : null}<h1 className="page-header">{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
            <Link to="/" className='custom-btn btn-12'><span>Click!</span><span>return&#x022B3;</span></Link>

            <Footer />
        </>
    )
}

export default Post
