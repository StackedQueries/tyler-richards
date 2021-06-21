import Post from './Post'
import ContentCard from './ContentCard';
import { useEffect, useState } from 'react'
import { GetCurrentSize } from '../utils/ViewportProvider';
const Posts = ({ posts, amount }) => {
    const [postPage, setPostPage] = useState([])
    const size = GetCurrentSize();

    const [rowWidth, setRowWidth] = useState(3)
    useEffect(() => {

        console.log(size);
        setRowWidth(size === "small" ? 1 : size === "medium" ? 2 : 3)
    }, [size]);

    useEffect(() => {
        let postrow = [];
        if (amount) {
            posts = posts.slice(0, amount)
        }
        for (let i = 0; i < posts.length; i += rowWidth) {
            const temp = []
            for (let j = 0; j < rowWidth; j++) {
                if (posts[i + j]) {

                    temp.push([posts[i + j]])
                }
            }
            postrow.push(temp)
        }
        setPostPage(postrow)

    }, [rowWidth]);

    return (
        <>
            {postPage.map((posts, index) => {
                return <div className="row page-section" key={index}>
                    {posts.map((post, index) => (
                        <ContentCard key={index} post={post[0]} />
                    ))}
                </div>
            })}
        </>

    )
}

export default Posts
