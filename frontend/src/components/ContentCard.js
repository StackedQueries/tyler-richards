
import { Link } from "react-router-dom";
const ContentCard = ({ post }) => {

    return (
        <div className="content-card">
            <img className="card-img" src={post.image?.url ? "http://localhost:5000/" + post.image.url : "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"} alt="placeholder"></img>
            <div className="card-info">
                <h4 className="card-title">
                    {post.title}
                </h4 >
                <p className="card-text">
                   {post.desc}</p>

                {post.id && <Link to={`/blog/${post.id}`} ><button className="button">Read More  {'>>'}</button></Link>
                }
            </div>
        </div>
    )
}

export default ContentCard
