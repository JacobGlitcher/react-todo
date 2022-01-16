import React from 'react';

import './styles/scss/main.scss';
import Todo from './components/Todo/Todo';

class App extends React.Component {
  render() {
    return (
        <div className='App'>
          <div className="wrapper">
            <Todo/>
          </div>
        </div>
    )
  }
}

export default App;