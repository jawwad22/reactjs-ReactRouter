import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postAction'


class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.posts.id);
        this.props.history.push('/')
    }
    render() {
        console.log(this.props)
        const post = this.props.posts ? (
            <div className="post">
                <h4 className="center">
                    {this.props.posts.title}
                </h4>
                <p>{this.props.posts.body}</p>
                <button className="btn grey" onClick={this.handleClick}>
                    Delete
                </button>
            </div>
        ) : (
                <div className="center">Lorem....</div>
            )
        return (
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
        posts: state.posts.find(post => post.id === id)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)