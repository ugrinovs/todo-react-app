import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import TodoList from './containers/TodoList';
import Loading from './containers/Loading';
import Menu from './containers/Menu';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App item-list">
          <Menu />
          <Loading>
            <TodoList />
          </Loading>
        </div>
      </Provider>
    );
  }
}

export default App;
