import React from 'react';

import ListItem from "../listItem/ListItem";
import styles from "./List.module.scss";

class List extends React.Component {
  render() {
    return (
        <ul className={styles['list']}>
          <div className={styles['list__inner']}>
            <ListItem/>
          </div>
        </ul>
    )
  }
}

export default List;