import React from 'react';

import styles from './ListItem.module.scss';

class ListItem extends React.Component {
  render() {
    return <>
      <li className={styles['list__item']}>
        <div className={styles['list__item-checkbox']}>
          <i className="fas fa-check"/>
        </div>
        <p className={styles['list__item-text']}>lorem</p>
        <div className={styles['list__item-remove']}>
          <i className="far fa-trash-alt"/>
        </div>
      </li>
    </>
  }
}

export default ListItem;