import Header from '../Header';
import Footer from '../Footer';/* 
import { makePost, updatePost } from '../../controllers/posts'; */
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../../controllers/editorTools'
import edjsParser from "editorjs-parser";

import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';



const MakePost = (props) => {

    const parser = new edjsParser(undefined);

    const dispatch = useDispatch();
    const instanceRef = useRef(null)
    const data = null;

    const loc = useLocation();
    const { id, titleProp, bodyProp, tagsProp } = loc.state?.post || false;


    const [title, setTitle] = useState(titleProp ? titleProp : 'title')
    const [body, setBody] = useState(bodyProp ? bodyProp : 'this is body text')
    const [tags, setTags] = useState(tagsProp ? tagsProp : [])
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
        if (id) {
            dispatch(updatePost(id, { post: { title, body: savedData, tags } }))
        } else {
            dispatch(createPost({ post: { title, body: savedData, tags } }))

        }

        return history.push('/')


    }


    return (
        <div>
            <Header />
            <form className="make-post" onSubmit={onSubmit}>
                <div className="form-section">
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
                    <label>body

                    <EditorJs instanceRef={(instance) => (instanceRef.current = instance)}
                            tools={EDITOR_JS_TOOLS}
                            data={body} />;
                    </label>
                </div>
                <button type='submit' className='custom-btn btn-12'>
                    <span>Click!</span><span>submit post &#x022B3;</span></button>
            </form>
            <Footer />
        </div>
    )
}

export default MakePost
