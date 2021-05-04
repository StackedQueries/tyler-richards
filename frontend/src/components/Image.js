const Image = ({ post }) => {
    if (!post.image.url) {
        return <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" />
    }
    return (
        <img src={"http://localhost:5000/" + post.image.url} />

    )
}

export default Image
