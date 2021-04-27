
export const getPosts = async () => {

    const res = await fetch('http://192.168.1.111:5000/posts');
    const postsFromServer = await res.json();
    console.log(postsFromServer)
    const projectsFromServer = postsFromServer.filter(project => project.tags.find(tag => tag === "project"));
    return { postsFromServer, projectsFromServer };

};

export const getPost = async (id) => {
    const res = await fetch(`http://192.168.1.111:5000/posts/${id}`);
    const postFromServer = await res.json();
    return postFromServer;

}

export const makePost = async (data) => {
    console.log(data)
    const res = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export const updatePost = async (id, data) => {
    const res = await fetch(`http://localhost:5000/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export const deletePost = async (id) => {
    console.log(id)
    const res = await fetch(`http://192.168.1.111:5000/posts/${id}`,
        { method: 'DELETE' })
}