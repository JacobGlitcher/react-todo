import React from 'react';

import styles from './Todo.module.scss';
import List from "./ListSection/list/List";
import Input from "./InputSection/Input/Input";

class App extends React.Component {
  render() {
    return (
        <div className={styles.todo}>
          <div className={styles['todo__inner']}>
            <h1 className={styles['todo__title']}>Enter Your TODO Tasks</h1>
            <div className={styles['todo__main']}>
              <Input/>
              <List/>
            </div>
          </div>
        </div>
    )
  }
}

export default App;