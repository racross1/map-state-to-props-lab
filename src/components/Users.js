import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(u => <li>{u.username}</li>)}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStatetoProps = (state) => {
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapStatetoProps)(Users);
