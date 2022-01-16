import React from 'react';

import styles from './InputButtons.module.scss'

class InputButtons extends React.Component {
  render() {
    return (
        <button className={styles.btn} type='button'>{this.props.value}</button>
    )
  }
}

export default InputButtons;