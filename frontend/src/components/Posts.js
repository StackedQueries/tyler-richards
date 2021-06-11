import Post from './Post'
import ContentCard from './ContentCard';
import { useEffect, useState } from 'react'
const Posts = ({ posts, amount }) => {
    const width = 3;
    const [postPage, setPostPage] = useState([])

    useEffect(() => {
        posts = posts.reverse()
        let postrow = [];
        if (amount) {
            posts = posts.slice(0, amount)
        }
        for (let i = 0; i < posts.length; i += width) {
            const temp = []
            for (let j = 0; j < width; j++) {
                if (posts[i + j]) {

                    temp.push([posts[i + j]])
                }
            }
            postrow.push(temp)
        }
        setPostPage(postrow)

    }, []);
    console.log(postPage)

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
