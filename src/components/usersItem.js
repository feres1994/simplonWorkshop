import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../actions/usersAction';
import './index.css';
export const usersItem = ({ userData, delet }) => {
  return (
    <div className="users-item">
      <div>
        <span>
          users id : <span className="colored">{userData.id}</span>{' '}
        </span>
        ,
        <span>
          users name: <span className="colored">{userData.name}</span>
        </span>
      </div>
      <button onClick={() => delet(userData.id)}>deleteUsers</button>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  delet: (userId) => dispatch(deleteUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(usersItem);
