import React, { Component } from 'react';
import './App.css';
import { Button, ListGroup, Form } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      data: ['example todo, click X to remove ']
    }
  }

  handleClick(){        
    const { data } = this.state
    data.push(this.textInput.value)
    this.setState(data)
  }

  delete(x){
    const { data } = this.state
    let prev = data.slice(0, x)
    let next = data.slice(x+1)
    let updateddata = prev.concat(next)
    this.setState({data: updateddata})
  }

  render() {
    return (
      <div className="App">
        <Form.Control type='text' placeholder="Enter todo then click add" ref={input => this.textInput = input }/>
        <Button variant="primary" onClick={this.handleClick}>Add</Button>
            {this.state.data.map((todo, x) =>
                <ListGroup.Item key={x}>{todo}
                        <Button variant='danger' onClick={() => this.delete(x)}> X </Button>
                </ListGroup.Item>)}
      </div>
    );
  }
}

export default App;
