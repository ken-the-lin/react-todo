import React, { Component } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';

class App extends Component { 
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {title: '', listElements: []};
    this.textInput = '';
    this.remove = this.remove.bind(this);
  }
  handleClick() {
    this.setState({title: this.textInput.value});
    let items = [...this.state.listElements];
    items.push(this.textInput.value);
    this.setState({listElements: items})
  }
  remove(currentItem, i) {
    let items = [...this.state.listElements];
    items.splice(i, 1);
    this.setState({listElements: items});
  }
  render() {
    const todoItems = this.state.listElements.map((items, i) =>
	    <div key={i} class="items"> {items} &nbsp;&nbsp;
	    <Button variant="danger" onClick={(e) => this.remove(items, i)}>X</Button> 

	    </div>
    );
    return (
      <div className="App">
	<Form.Control type='text' ref={input => this.textInput = input}/>
        <Button varient="Add" onClick={this.handleClick}>Add todo</Button>
	{todoItems}
      </div>
    );
  }
}

export default App;
