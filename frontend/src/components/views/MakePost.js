import Header from '../Header';
import Footer from '../Footer';
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom"
import { useHistory, useParams } from 'react-router-dom'
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../../controllers/editorTools'
import edjsParser from "editorjs-parser";
import ImageManager from "../ImageManager";
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { getPost } from '../../actions/posts';



const MakePost = (props) => {

    const parser = new edjsParser(undefined);

    const dispatch = useDispatch();
    const instanceRef = useRef(null)
    const data = null;

    const { postId } = useParams();

    useEffect(() => {
        const get = async () => {
            if (postId) {
                const post = await getPost(postId)
                console.log(post)
                setBody(post.body)
                setTitle(post.title)
                setTags(post.tags)
                setImage(post.setImage)
            }
        }
        get()


    }, [])

    const [title, setTitle] = useState('title')
    const [body, setBody] = useState(null)
    const [tags, setTags] = useState([])
    const [image, setImage] = useState(null)
    const history = useHistory();


    const onSubmit = async (e) => {
        e.preventDefault()

        if (!body) {
            alert('Please add body')
            return
        }
        const savedData = await instanceRef.current.save()
        console.log(savedData)
        console.log(parser.parse(savedData))
        if (postId) {
            dispatch(updatePost(postId, { post: { title, body: savedData, tags, image } }))
        } else {
            dispatch(createPost({ post: { title, body: savedData, tags, image } }))

        }
        return history.push('/')
    }
    return (
        <div>
            <Header />
            <ImageManager setImage={setImage} />
            <form className="make-post" onSubmit={onSubmit}>
                <div className="form-section">
                    {image && <div><h6>image is</h6> <img width="100px" src={"http://localhost:5000/" + image.url} />
                    </div>}
                    <label>Title
                    <input
                            type='text'
                            placeholder='Add Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>

                </div>
                <div className="form-section">
                    <label>body
                    <input
                            type='text'
                            placeholder='Add tag'
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-section">
                    {body || !postId ? <label>body

                    <EditorJs instanceRef={(instance) => (instanceRef.current = instance)}
                            tools={EDITOR_JS_TOOLS}
                            data={body} />;
                    </label> : 'LOADING'}
                </div>
                <button type="button" className='custom-btn btn-12' onClick={() => history.push('/')}>
                    <span>Click!</span><span>go back &#x022B3;</span></button>
                <button type='submit' className='custom-btn btn-12'>
                    <span>Click!</span><span>submit post &#x022B3;</span></button>
            </form>
            <Footer />
        </div>
    )
}

export default MakePost
