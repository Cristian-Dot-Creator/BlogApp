import React, {Component} from "react";
import { Link } from 'react-router-dom'
import Geek from '../images/Geek.jpg'
import {connect} from 'react-redux' /// a funciton high order componets 



class Home extends Component {
    render() {
        console.log(this.props)
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                    <img src={Geek} alt="A geek logo"></img>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                            <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No post yet</div>
        )
        return(
            <div className="container home">
            <h4 className="center ">Home</h4>
                {postList}
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home) // connection is a function that has a high order componets that why we call on 
//the connect function connect() then that function is a returning a higher-order componet and we wrap the (Home) after using