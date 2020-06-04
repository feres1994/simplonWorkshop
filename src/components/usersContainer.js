import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersFromApi } from '../actions/usersAction';
import UserItem from './usersItem';

export class usersContainer extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map((el, i) => (
          <UserItem key={i} userData={el} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getUsersFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(usersContainer);
