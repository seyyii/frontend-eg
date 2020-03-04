import React from 'react';
import axios from 'axios';

class Post extends React.Component {
    constructor(){
        super();
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res.data)
            this.setState({
                posts: res.data
            })
        })
        .catch(err=> console.log(err))
    }
    render(){
        const post = this.state.posts.map(post=>{
            return(
                <div key={post.id} className='card my-4'>
                    <h3 className='text-secodary text-center'>{post.title}</h3>
                    <p className='card-body'>{post.body}</p>
                </div>
            )
        })
        return (
            <div>
                <h1 className='text-center'>Post</h1>
                {post}
            </div>
        )

    }
}

export default Post;