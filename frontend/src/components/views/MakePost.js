import Header from '../Header';
import Footer from '../Footer';
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom"
import { useHistory, useParams } from 'react-router-dom'
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../../controllers/editorTools'
import edjsParser from "editorjs-parser";
import ImageManager from "../ImageManager";
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { getTags, createTag, deleteTag } from '../../actions/tags'
import { getPost } from '../../actions/posts';



const MakePost = (props) => {
    const parser = new edjsParser(undefined);

    const dispatch = useDispatch();
    const instanceRef = useRef(null)

    const [title, setTitle] = useState('title')
    const [body, setBody] = useState(null)
    const [postTags, setPostTags] = useState([])
    const [newTag, setNewTag] = useState(null)
    const [image, setImage] = useState(null)
    const history = useHistory();

    const { postId } = useParams();
    const state = useSelector((state) => state);
    const tags = useSelector((state) => state.tags);
    useEffect(() => {
        const get = async () => {
            console.log('test')
            await dispatch(getTags())

        console.log(tags)
        console.log(state)
        console.log(postTags)
            if (postId) {
                const post = await getPost(postId)
                console.log(post)
                setBody(post.body)
                setTitle(post.title)
                setPostTags(post.tags)
                setImage(post.setImage)
            }
        }
        get()
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(postTags)
        const savedData = await instanceRef.current.save()
        console.log(savedData)
        console.log(parser.parse(savedData))
        if (parser.parse(savedData))
            if (postId) {
                console.log("tags:" + postTags)
                dispatch(updatePost(postId, { post: { title, body: savedData, tags: postTags, image } }))
            } else {
                dispatch(createPost({ post: { title, body: savedData, tags: postTags, image } }))

            }
        return history.push('/')
    }

    const sendTag = e => {

        e.preventDefault()
        console.log(newTag)
        if (newTag) {
            dispatch(createTag({ tag: { tagName: newTag } }))
        }

    }

    const tagChange = async e => {

        if (e.target.checked) {
            console.log("this item is checked")
            await setPostTags([e.target.id, ...postTags])
        }
        if (!e.target.checked) {
            console.log(postTags)
            await setPostTags(postTags.filter((value, index, arr) => {
                console.log(value, e.target.value)
                return value !== e.target.id
            }))
        }
        console.log(tags)
        console.log(state)
        console.log(postTags)
    }

    return (
        <div>
            <Header />
            <ImageManager setImage={setImage} />
            <form className="tagManager" onSubmit={sendTag}>
                <div className="form-section">
                    <label>Add Tag
                    <input
                            type='text'
                            placeholder='Add tag'
                            onChange={(e) => setNewTag(e.target.value)}
                        />
                    </label>
                    <button>Create new Tag</button>
                </div>
            </form>

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

                    <label>Add Tag
                    </label>
                    {tags.map((tag, index) =>  {
                        return (<label> <input
                        type='checkbox'
                        key={index}
                        placeholder='Add tag'
                        id={tag._id}
                        name={tag.tagName}
                        onChange={(e) => tagChange(e)}
                        key={index}
                        checked={postTags.includes(tag._id)}
                        
                    

                    /> {tag.tagName}</label>)})}




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
