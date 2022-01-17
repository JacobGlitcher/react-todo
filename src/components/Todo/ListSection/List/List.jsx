import React from 'react';

import ListItem from "../ListItem/ListItem";
import styles from "./List.module.scss";

class List extends React.Component {
  render() {
    return (
        <ul className={styles['list']}>
          <div className={styles['list__inner']}>
            <ListItem
                toDos={this.props.toDos}
                removeParticularToDo={this.props.removeParticularToDo}
                checkItem={this.props.checkItem}
            />
          </div>
        </ul>
    )
  }
}

export default List;