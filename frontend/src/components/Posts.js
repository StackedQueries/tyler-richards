import Post from './Post'

const Posts = ({ posts }) => {
    return (
        <>
            {posts.slice(0).reverse().map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </>
    )
}

export default Posts
