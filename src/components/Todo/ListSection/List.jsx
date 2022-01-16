import React from 'react';

import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    return (
        <ul className="list">
          <div className="list__inner">
            <ListItem/>
          </div>
        </ul>
    )
  }
}

export default List;