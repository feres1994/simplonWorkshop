import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
//components
import UserContainer from './components/usersContainer';
import UserInput from './components/input';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">hello redux</div>
      <UserInput />
      <UserContainer />
    </Provider>
  );
}

export default App;
