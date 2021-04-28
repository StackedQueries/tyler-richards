
import { deletePost } from '../actions/posts';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
const Post = ({ post }) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(true);
    const onDelete = () => {
        dispatch(deletePost(post.id))
        setVisible(false);
    }
    return (
        <>
            {visible ?
                <div className="post-section">
                    <Link onClick={onDelete}>Delete Post</Link>
                    <Link to={{
                        pathname: "/makePost",
                        state: {
                            post: {
                                id: post.id,
                                titleProp: post.title,
                                bodyProp: post.body,
                                tagsProp: post.tags

                            }
                        }

                    }}> Edit Post</Link>
                    <div className="info">
                        <h6>
                            {post.title}{' '}
                        </h6>
                        <Link to={`/blog/${post.id}`} ><button className={'custom-btn btn-12'}><span>Click!</span><span>Check out post &#x022B3;</span></button></Link>

                    </div>
                    <img src={"http://localhost:5000/" + post.image.url} />
                </div>
                : ""}
        </>
    )
}

export default Post
