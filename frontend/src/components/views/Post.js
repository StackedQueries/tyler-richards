import React, { useState, useEffect } from 'react'
import {
  Link,
  useParams
} from 'react-router-dom'
import Footer from '../Footer'
import { getPost } from '../../actions/posts'
import ContentViewer from '../ContentViewer'
import Header from '../../components/Header'
import '../../styles/post.scss'
const Post = () => {
  const [post, setPost] = useState('')
  const { postId } = useParams()

  useEffect(() => {
    const get = async () => {
      const post = await getPost(postId)
      await setPost(post)
    }
    get()
  }, [])

  return (
        <>
            <Header />
            <div className='page-content'>
                <h1 className="page-title">{post.title}</h1>
                <div className="post-section">
                {post.image?.url
                  ? <img width="75%" src={process.env.REACT_APP_API_URL + post.image.url}></img>
                  : null}

                {post && <ContentViewer content={post.body} /> }
                </div>

            <Link to="/" className='button'>Return</Link>

            </div>
            <Footer />
        </>
  )
}

export default Post
