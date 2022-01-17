import React from 'react';

import styles from './ListItem.module.scss';

class ListItem extends React.Component {
  render() {
    return this.props.toDos.map((item, index) => {
      return <li
          key={index}
          className={[styles['list__item'], item.isDone ? styles['active'] : null].join(' ')}>
        <div
            className={styles['list__item-checkbox']}
            onClick={() => this.props.checkItem(index)}>
          <i className="fas fa-check"/>
        </div>

        <p className={styles['list__item-text']}>{item.info}</p>

        <div
            className={styles['list__item-remove']}
            onClick={() => this.props.removeParticularToDo(index)}>
          <i className="far fa-trash-alt"/>
        </div>
      </li>
    });
  }
}

export default ListItem;