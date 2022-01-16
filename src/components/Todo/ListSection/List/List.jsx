import React from 'react';

import ListItem from "../ListItem/ListItem";
import styles from "./List.module.scss";
import Input from "../../InputSection/Input/Input";

class List extends React.Component {
  render() {
    return (
        <ul className={styles['list']}>
          <div className={styles['list__inner']}>
            <ListItem
                toDos={this.props.toDos}
                // removeParticularToDo={this.props.removeParticularToDo}
                removeParticularToDo={this.props.removeParticularToDo}
            />
          </div>
        </ul>
    )
  }
}

export default List;