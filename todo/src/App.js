import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, Card, ListGroup } from 'react-bootstrap';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			arrInput: [ 'test' ]
		}
	}
	handleClick() {
		this.state.arrInput.push( this.textInput.value );
		this.setState( this.state.arrInput );
		console.log( "state is set");
	}
	deleteElement(key) {
		let firstHalf = this.state.arrInput.slice(0, key);
		let secondHalf = this.state.arrInput.slice(key+1,this.state.length);
		console.log( "firstHalf is " + firstHalf);
		console.log( "secondHalf is " + secondHalf);
		this.setState( {arrInput: firstHalf.concat(secondHalf)} );
	}


  render() {
    return (
      <div className="App">
				<Form.Control
					type='text'
					ref={input => this.textInput = input}
				/>
				<Button
					variant="primary"
					onClick={this.handleClick}>
						Add
				</Button>
				<ListGroup>
					{this.state.arrInput.map( (todo, key) =>
					 				<ListGroup.Item key={key}>
										{todo}
									<Button
										variant='danger'
										onClick={deleteElement => this.deleteElement(key)}>
											X
									</Button>
									</ListGroup.Item> )}
				</ListGroup>
      </div>
    );
  }
}

export default App;
