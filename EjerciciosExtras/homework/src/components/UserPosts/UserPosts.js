import React from 'react';
import { connect } from 'react-redux';
import './UserPosts.css';
import { getAllUserPosts } from '../../actions';
import CommentsPost from '../CommentsPost/CommentsPost';

export class UserPosts extends React.Component {
  componentDidMount(){
    getAllUserPosts(this.props.match.params.id)
  }
  render() {
   
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {this.props.match.params.id}</h4>
        <ul>
          { this.props.userPosts && this.props.userPosts.map( post => {
            <div>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              <CommentsPost id={this.props.match.params.id}/>
            </div>
          })}
        </ul>
      </div>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllUserPosts: (id) => dispatch(getAllUserPosts(id))
  };
}

export function mapStateToProps(state) {
  return {
      userPosts: state.userPosts
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPosts);