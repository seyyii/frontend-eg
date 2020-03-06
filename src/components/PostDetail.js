import React from "react";
import axios from "axios";


class PostDetail extends React.Component{
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(res=>{
            this.setState({
                posts: res.data
            })
        })
    }
    render(){
        const post = this.state.map((posts)=>{
            return(
                <div>
                    <h3>{posts.title}</h3>
                    <p>{posts.body}</p>
                </div>
            )
        })
        return(
            <div>
                {post}
            </div>
        )}
    
}

export default PostDetail