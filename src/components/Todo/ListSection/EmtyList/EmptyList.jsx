import React from 'react';

import styles from "./EmptyList.module.scss";

class EmptyList extends React.Component {
  render() {
    return (
        <div className={styles['empty-list']}>
          Add a todo item
        </div>
    )
  }
}

export default EmptyList;