import React from 'react';

import InputButtons from '../InputButtons/InputButtons';
import styles from './Input.module.scss';

class Input extends React.Component {
  render() {
    return (
        <div className={styles['todo__input']}>
          <div className={[styles['input-field'], styles.col].join(' ')}>
            <input type='text' value={this.props.inputElementValue} onChange={this.props.getValue}/>
          </div>
          <div className={styles['input-buttons']}>
            <InputButtons value='Add New' removeAddEvents={this.props.addValue}/>
            <InputButtons value='Delete All' removeAddEvents={this.props.removeAll}/>
          </div>
        </div>
    )
  }
}

export default Input;