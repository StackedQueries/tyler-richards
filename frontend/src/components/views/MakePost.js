import Header from '../Header'
import Footer from '../Footer'
import React, { useState, useEffect, useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ImageManager from '../ImageManager'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost, getPost } from '../../actions/posts'
import { getTags, createTag, deleteTag } from '../../actions/tags'
import { EditorState, convertFromRaw, convertToRaw, ContentState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const MakePost = (props) => {
  const dispatch = useDispatch()
  const [mounted, setMounted] = useState(false)
  const [title, setTitle] = useState('title')
  const [desc, setDesc] = useState(null)
  const [body, setBody] = useState({})
  const [postTags, setPostTags] = useState([])
  const [newTag, setNewTag] = useState(null)
  const [image, setImage] = useState(null)
  const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromText('Hello')));
  const history = useHistory()

  const { postId } = useParams()
  const state = useSelector((state) => state)
  const tags = useSelector((state) => state.tags)
  useEffect(() => {
    const get = async () => {
      await dispatch(getTags())
      if (postId) {
        console.log('test')
        const post = await getPost(postId)
        console.log(post.body)
        setEditorState(EditorState.createWithContent(convertFromRaw({blocks: post.body.blocks, entityMap:{}})))
        setBody(post.body)
        setTitle(post.title)
        setDesc(post.desc)
        setPostTags(post.tags)
        setImage(post.setImage)
      }
      await setMounted(true)
    }
    get()
  }, [])

  const saveData = (content) => {
    console.log(`setting body to ${JSON.stringify(content)}`)
    setEditorState(content)
    setBody(convertToRaw(content.getCurrentContent()))
    console.log(editorState)
    console.log(body)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('submitting')
    console.log(body)
    if (postId) {
      console.log('tags:' + postTags)
      dispatch(updatePost(postId, { post: { title, body, tags: postTags, image, desc } }))
    } else {
      dispatch(createPost({ post: { title, body, tags: postTags, image, desc } }))
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
      console.log('this item is checked')
      await setPostTags([e.target.id, ...postTags])
    }
    if (!e.target.checked) {
      console.log(postTags)
      await setPostTags(postTags.filter((value, index, arr) => {
        console.log(value, e.target.value)
        return value !== e.target.id
      }))
    }
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
            <div className="form-section">
                <label>body

                    {mounted && <div className="page-content">
                        <Editor
                          editorState={editorState}
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                          onEditorStateChange={saveData}
                        />
                    </div>
                    }
                </label>

            </div>
            <form className="make-post" onSubmit={onSubmit}>
                <div className="form-section">
                    {image && <div><h6>image is</h6> <img width="100px" src={process.env.REACT_APP_API_URL + image.url} />
                    </div>}
                    <label>Title
                    <input
                            type='text'
                            placeholder='Add Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    <br></br>
                    <label>Description
                    <input
                            type='text'
                            placeholder='Add Description'
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </label>

                </div>
                <div className="form-section">

                    <label>Add Tag
                    </label>
                    {tags.map((tag, index) => {
                      return (<label> <input
                        type='checkbox'
                        key={index}
                        placeholder='Add tag'
                        id={tag._id}
                        name={tag.tagName}
                        onChange={(e) => tagChange(e)}
                        key={index}
                        checked={postTags.includes(tag._id)}

                    /> {tag.tagName}</label>)
                    })}
                </div>

                <button type="button" className='button' onClick={() => history.push('/')}>
                    Go Back</button>
                <button type='submit' className='button secondary-button'>
                    Submit!</button>
            </form>

            <Footer />
        </div>
  )
}

export default MakePost
