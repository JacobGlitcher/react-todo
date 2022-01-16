import React from 'react';

import styles from "./EmptyList.module.scss";

class EmptyList extends React.Component {
  render() {
    return (
        <div className={styles['empty-list']}>
          Add a ToDo Item
        </div>
    )
  }
}

export default EmptyList;