import React from 'react';

import styles from './Todo.module.scss';
import List from "./ListSection/List/List";
import Input from "./InputSection/Input/Input";
import EmptyList from "./ListSection/EmtyList/EmptyList";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [],
      userInputVal: '',
      inputElementValue: '',
    }
  }

  getInputValue = (event) => {
    if (event.target.value.length <= 50) {
      this.setState({
        userInputVal: event.target.value.trim(),
        inputElementValue: event.target.value,
      });
    }
  }

  addInputValue = () => {
    // add new items to List
    if (this.state.userInputVal) {
      let newToDos = this.state.toDos;
      let userInput = this.state.userInputVal

      newToDos.push({info: userInput, isDone: false});

      this.setState({
        toDos: newToDos
      });
    }

    // remove any text from input after clicked "add button"
    this.setState({
      userInputVal: '',
      inputElementValue: '',
    });
  }

  removeAllToDos = () => {
    this.setState({
      toDos: []
    });
  }

  removeParticularToDo = (itemKey) => {
    let newToDos = this.state.toDos.filter((item, index) => {
      return itemKey !== index;
    });

    this.setState({
      toDos: newToDos
    });
  }

  checkItem = (itemKey) => {
    let newCheckList = this.state.toDos.map((item, index) => {
      return itemKey === index ? { ...item, isDone: !item.isDone} : item
    });

    this.setState({
      toDos: newCheckList
    })
  }

  render() {
    return (
        <div className={styles.todo}>
          <div className={styles['todo__inner']}>
            <h1 className={styles['todo__title']}>TODO Item List</h1>
            <div className={styles['todo__main']}>
              <Input
                  getValue={this.getInputValue}
                  addValue={this.addInputValue}
                  removeAll={this.removeAllToDos}
                  inputElementValue={this.state.inputElementValue}
              />

              {this.state.toDos.length ?
                  <List
                      toDos={this.state.toDos}
                      removeParticularToDo={this.removeParticularToDo}
                      checkItem={this.checkItem}
                  /> : <EmptyList/>}
            </div>
          </div>
        </div>
    )
  }
}

export default Todo;