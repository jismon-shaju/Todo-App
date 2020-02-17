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
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: { text: e.target.value, key: Date.now() }
    });
  }

  addItem(e) {
    e.preventDefault();
    if (this.state.currentItem.text === '') {
      return;
    }
    const items = [...this.state.items, this.state.currentItem];
    this.setState({
      items: items,
      currentItem: {
        text: '',
        key: ''
      }
    });

  }

  deleteItem(key) {
    const items = this.state.items.filter(x => x.key !== key);
    this.setState({
      items: items
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" value={this.state.currentItem.text} placeholder="Enter task" onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>
          <p>{this.state.currentItem.text}</p>

          <ListItems items={this.state.items} deleteItem={this.deleteItem}></ListItems>

        </header>
      </div>
    )
  }
}