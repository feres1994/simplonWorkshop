import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/usersAction';
import './index.css';
const Input = ({ addPerson }) => {
  const [userName, setUserName] = useState('');
  return (
    <>
      {' '}
      <input
        type="text"
        placeholder="write user name"
        style={{ marginBottom: '25px' }}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        className="add-user"
        onClick={() =>
          addPerson({
            id: 0,
            name: userName,
          })
        }
      >
        add User
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addPerson: (user) => dispatch(addUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
