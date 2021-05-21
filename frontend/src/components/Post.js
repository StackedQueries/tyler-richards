
import { deletePost } from '../actions/posts';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
const Post = ({ post }) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(true);
    const onDelete = () => {
        dispatch(deletePost(post.id))
        setVisible(false);
    }

    const user = useSelector((state) => state.auth);
    const isAdmin = user.authData?.result.status
    const [img, setImg] = useState(false)
    useEffect(() => {
        setImg(post.image?.url ? "http://localhost:5000/" + post.image.url : "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80")

    }, [])

    return (
        <>
            {visible ?
                <div className="post-section">
                    {isAdmin ?
                        <div>
                            <Link to={""} onClick={onDelete}>Delete Post</Link>
                            <Link to={`/updatePost/${post.id}`}> Edit Post</Link></div> : null}

                    <div className="info">
                        <h6>
                            {post.title}{' '}
                        </h6>
                        <Link to={`/blog/${post.id}`} ><button className={'custom-btn btn-12'}><span>Click!</span><span>Check out post &#x022B3;</span></button></Link>

                    </div>
                    <img src={img} />
                </div>
                : ""}
        </>
    )
}

export default Post
