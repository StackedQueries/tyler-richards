import React, { useState, useEffect } from "react";
import {
    Link,
    useParams
} from "react-router-dom";
import Footer from '../Footer';
import edjsParser from "editorjs-parser";


import Header from '../../components/Header';
import { getPost } from '../../controllers/posts'
import '../../styles/post.scss'
const Post = () => {
    const parser = new edjsParser("");

    const { postId } = useParams();
    const [post, setPost] = useState([{ title: 'loading' }]);
    const [body, setBody] = useState("loading...")

    useEffect(() => {
        const get = async () => {
            const currPost = await getPost(postId)
            await setPost(currPost)
            await setBody(await parser.parse(currPost[0].body))

        };
        get()

    }, [])
    return (
        <>
            <Header />
            <div className='page-content'>
                <h1>{post[0].title}</h1>
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
            <Link to="/" className='custom-btn btn-12'><span>Click!</span><span>return&#x022B3;</span></Link>

            <Footer />
        </>
    )
}

export default Post
