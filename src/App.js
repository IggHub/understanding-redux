import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import ViewTodoList from './containers/ViewTodoList';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AddTodo />
          <ViewTodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
