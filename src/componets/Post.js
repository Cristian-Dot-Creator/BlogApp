import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deletePost} from '../actions/postAction'


class Post extends Component {


    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

    render() {

        console.log(this.props)
        

        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                    <img className='center' alt="images" src={this.props.post.image}></img>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) 
        : (
            <div className="center">Loading post...</div>
        )

        return (
            <div className="container">
                {post}   
            </div>
        )
    }
}

const mapStatetoProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === parseInt(id)) //So right here eiterh set this to an Integer or set this to a == because === is to strict
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(Post)