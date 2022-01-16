import React from 'react';

import InputButtons from '../InputButtons/InputButtons';
import styles from './Input.module.scss';

class Input extends React.Component {
  render() {
    return (
        <div className={styles['todo__input']}>
          <div className={`${styles['input-field']} ${styles.col}`}>
            <input type='text'/> {/* temporary solution */}
          </div>
          <div className={styles['input-buttons']}>
            <InputButtons value='Add New'/>
            <InputButtons value='Delete All'/>
          </div>
        </div>
    )
  }
}

export default Input;