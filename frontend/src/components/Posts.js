import Post from './Post'
import ContentCard from './ContentCard';
const Posts = ({ posts, amount }) => {
    console.log(posts)
    if (amount) {
        posts = posts.slice(0, amount)
    }

    return (
        <div className="row">
            {posts.slice(0).reverse().map((post, index) => (
                <ContentCard key={index} post={post} />
            ))}
        </div>
    )
}

export default Posts
