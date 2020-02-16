import React, { Component } from 'react';
import './App.css';
import ListItems from './ListItems';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTrash)

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: { text: e.target.value, key: new Date() }
    });
  }

  addItem(e) {
    e.preventDefault();
    const items = [...this.state.items, this.state.currentItem];
    this.setState({
      items: items
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter task" onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>
          <p>{this.state.currentItem.text}</p>

          <ListItems items={this.state.items}></ListItems>

        </header>
      </div>
    )
  }
}