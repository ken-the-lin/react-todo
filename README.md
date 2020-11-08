# react-todo
A todo app to practice react
## Objective
The goal of this project is to get you familiar with react. In particular, you will work closely with props and state of react and you will 'map' a little. <br/>
<br/>
## Git Clone
Before anything, run the follow command to clone the repo
~~~
git clone git@github.com:xiqianglin/react-todo.git
~~~
## Intro to Node and NPM
First of all, you will need to install **Node.js** on your machine. Node.js is a javascript engine that runs your js code. Just google Nodejs and install one that matches your machine. No more explanantion on this.
<br/><br/>
Next, you need to use **npm** (Node Package Manager). npm is a tool that manage your project dependencies. People has written a lot of code and they deploy them on npm. You then can use npm to grab what they have written and use then directly. Pretty nice, right? Even nicer, npm comes with node.js, so you don't need to install npm separately. Another package manager we often use to replace npm is **yarn**. I am just putting the name here. From our current point of view, it does the samething as npm but using a different interface.
<br/><br/>
Now you have Node.js installed on your machine. Remember Node is a js engine? Let's write a hello world program and have node run it! 
<br/><br/>
Open your termial and create a file name 'HelloWorld.js' and write the line below to your file and save it.
~~~
console.log('hello world');
~~~
Go back to your terminal and run
~~~
node HelloWorld.js
~~~
Did he say 'hello world'?
<br/><br/>
Cool. Now let's have some fun with npm. Remember npm grabs people's code (package) for you? One really nice package is **create-react-app**. Setting up your environment to write react is a complicate and error-prone process (well, I do encourage you to look deeper into this after you are familar with react. You will learn a lot from setting everything up from scratch), create-react-app abstracts all the details from you so you can focus on writing react. Run the follow command to install create-react-app
~~~
npm install --global create-react-app
~~~
The `--global` option of the command `npm install` tells npm to install this package globally on your machine. 
<br/>br/>
## Let's git a little
Nice, Nice. Now you have basically have everything setup. Now let's git a little. 
<br/><br/>
The point of doing git is that I want you to work on your branch so you code won't affect someone else's code.
<br/><br/>
Because you have cloned this repo, you should have a directory called `react-todo` on your machine. `cd` to `react-todo` (Do it windows way, I guess?) and run 
~~~
git status
~~~
It should say that you are now under master branch. Let's create a branch using your name
~~~
git branch <yourname>
~~~
It doesn't tell you anything, but what it does is basically creating a new branch base off your current branch. If you run
~~~
git branch
~~~
you should see a branch of your name been created. The hightlighted one is the current branch you are under
<br/><br>
Now run
~~~
git checkout <yourname>
~~~
This goes to your branch and now you can start working. In the future, when you try to work on a new feature or experiment things around, always create a new branch. Trust me, this makes your and others' life better.
<br/><br/>
## create-react-app
I assume you are currently under the react-todo directory and under your own branch. Now run the following 
~~~
create-react-app todo
~~~
This command will create a directory call `todo` and fill it with nice stuff that allows you write react code. It's gonna take a minute or so to finish running (may be shorter?).
<br/><br/>
again, `cd` to the `todo` directory, you should see the project structure looks like this:
~~~
--todo
  --node_modules
    --...
  --public
    --...
  --src
    --...
    --App.js
    --...
  --.gitignore
  --package.json
  --README.md
  --yarn.lock
~~~
The directory **node_modules** contains all the project dependecies (It's huge, don't look into it). Whatever third party library we use in the project, they all go into **node_modules**. The file **package.json** keeps track of all the dependencies. Because the **node_modules** is so huge, engineers communicates via **package.json**. It tells other engineers what 3rd party packages this project uses. To recap, **package.json** is a record of the 3rd party packages (the names) you are using for this project, and **node_modules** will contain the actual packages (the code).
<br/><br/>
## setup react-bootstrap 
Let's install one more package so you are ready to go
~~~
npm install --save react-bootstrap
~~~
The `--save` option tells npm to keep a record on the package.json file. `react-bootstrap` is a UI library that we will use (make your life much easier).
<br/><br/>
In order to have the bootstrap style work on our project, we need its style sheet. Open `public/index.html` and paste the following link under the `<head>` tag
~~~
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>
~~~
<br/><br/>
Now, if you run
~~~
npm start
~~~
The project will start on its own and a browser tab will automatically popup (or you can manually type in `localhost:3000` on your browser, and you will see a huge react icon. The next thing we do is to delete most of its code and write our own.<br/><br/>
## Writing React Code
Within `App.js` file, you should see the following code
```javascript
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>
```
I want you to delete everything inbetween the `<div>` tag, and write write down 'hello world'. So you should be left with 
```javascript
<div>
  Hello World
</div>
```
After you save the file, your browser should automatically update its content. Did your browser say 'hello world'?
<br/><br/>
Now, let's make something sorta functional.
<br/><br/>
Let's add the following line to import a button from `react-bootstrap`
```javascript
import { Button } from 'react-bootstrap'
```
And now let's use the button and add little style and function to it. More info about the bootstrap button (or any other components in general), go to https://react-bootstrap.github.io/components/buttons/ for more.
<br/>
Your App.js should now look lile
```javascript
import React, from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
	const handleClick = () => { 
		console.log("Click");
	}

	return (
		<div>
			<Button variant="primary" onClick={handleClick}>Add</Button>
		</div>
	);
}

export default App;
```
The `import { ... } from '...'` is importing code from the package you already installed. In this case, we are importing a button component. <br/><br/>
The `function App() {...}` is actually a React Component called "functional component". In the old React syntax, you might have seen it written as `class App extends Component { ... }` (class component). They are not exactly the same thing. The main difference is that when using state in the component, class component will rely on setting up `this.state` and using `setState()` to update the state. Whereas functional component relies on using **react hooks** to manage state. React hooks gives us a much more clean styling of code. This todo app will be using react hooks. If these doesn't make much sense to you yet, don't panic. We will talk more about it later.<br/><br/>
The `variant` gives the style to the button.<br/>
And we passed a function to the `onClick` props of the button, so when you click it, it will execute the function body. Save the file, and go to the browser, you should see a blue button waiting to be clicked.<br/><br/>
**Note:** The language we are writing here is javascript, but why are we writing these HTML inside javascript? These HTML tags are called "Javascript Syntax Extension" (JSX). In runtime, they will be compiled into pure javascript. <br>
One other thing to notice is the transition from JSX to javascript. When you are writing in javascript, you can start a JSX expression as you want. But in the middle of JSX, if you want to start a javascript expression, then you need to wrap the javascript statement in `{}`. The `handleClick` is an example. The `onClick=` is part of the JSX, but `handleClick` is a function in javascript defined above. In order to access the function, we wrap the `handleClick` with `{}`.  Just keep this JSX -> javascript transition in mind. If this still doesn't make much sense to you, it's ok. This will come natural to you once you are more experienced with react.
<br/>
<br/>
Click the button! But wait, we did the output go? Remember `console.log('..')` prints something? Where is it printed? <br/>
The answer is to the browser console. Right-click on a blank space on your browser and click `inspect` (I assume you are using google chrome). You should see a toolbar popup (either from the right or from bottom). Now click the `console` on top of the toolbar. Did you see the output? What happens if you click the button a few more times?
## Let's build a todo-app
Let's build a todo-app. In this process, you will use some functions to manipulate JS arrays such as **map, concat, push, slice...** <br/>
Also, you will learn to use react state via using react hooks. 
### Overall Structure
We will have 2 files: `App.js`, `Todos.js`. <br/>
`App.js` is the top level component. It will manage a list of todos data, and pass the data to `Todos.js` to display the list of todos <br/>
`Todos.js` takes a list todo data and display all the data <br/>
### Step1: make a textfield
It's a todo-app. We need a way to type in the todo content. A textfield is a nice way to do that. In HTML, this component will give you a textfield:
```javascript
<input
	type='text'
	onChange={onType}
/>
```
It's better to extrack that `onChange` function out, so let's define a new function `onType` within the app component.
```javascript
const onType = (event) => {
  console.log(event.target.value);
}
```
The `event` is the argument passed in to the `onType` function when user modifies the text inside the textfield. `event.target` refers the textfield itself. `event.target.value` is the actual text inside the textfield. 
Then, substitue the `onChange` function with the `onType` fuction. Your final `App.js` should look like:
```javascript
import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
	const handleClick = () => { 
		console.log("Click");
	}

	const onType = (event) => {
		console.log(event.target.value);
	}

	return (
		<div>
			<input
				type='text'
				onChange={onType}
			/>
			<Button variant="primary" onClick={handleClick}>Add</Button>
		</div>
	);
}

export default App;
```
Now go to the browser. As you type some text in the textfield, what do you see in the console?
### Introducing state (and react hooks)
The text in the textfield only lives in `event.target.value`. We would like to save it in some variable such that as the `event.target.value` changes, the variable value changes with it; Also, we want this variable be used anywhere in this component. To achieve this, we will use **state**. No more words, let's take a look at the code on how to create a state for a component:
```javascript
const [todoContent, setTodoContent] = useState('')
```
`useState(initialValue)` is the function that allows functional components to use state. It takes an initial value as argument (can be any type) and returns a pair `[stateVar, setStateFunc]`. The `stateVar` is used to read the state value, and `setStateFunc` is used to update the state value. <br/>
You might ask "if we only want some variable to use and a function to update it, why don't we just use a javascript variable? We can also read it and update it." This is a great question. The answer to this is that the `setStateFunc` does more stuff for us. When you call `setStateFunc(newValue)`, one of the important things it does is that it triggers a refresh (called **rerender** in react) to the react component. If you only update the plain javascript variable, react component doesn't know it's the time to refresh itself. <br/>
We will see how the textfield value is stored in the state variable, how we read the variable and how we update the variable. All of these will be inside the `onType` function:
```javascript
const onType = (event) => {
  console.log(todoContent);
  setTodoContent(event.target.value)
}
```
The `console.log(todoContent)` is reading the state value and printing it to the console, and the `setTodoContent(event.target.value)` is updating the state value with the new text in the textfield. This is probably not the best example. We will see a better example in the next section **Get the todos data ready** <br/>
Now the whole `App.js` should look like:
```javascript
import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
	const [todoContent, setTodoContent] = useState('')

	const handleClick = () => { 
		console.log("Click");
	}

	const onType = (event) => {
		console.log(todoContent);
		setTodoContent(event.target.value)
	}

	return (
		<div>
			<input
				type='text'
				onChange={onType}
			/>
			<Button variant="primary" onClick={handleClick}>Add</Button>
		</div>
	);
}

export default App;
```
### Step2: Get the todos data ready.
As mentioned in the **Overall Structure** section, the `App.js` manages the data to display. When we add a new todo item, the App should automatically shows the new item that we added. Wait a sec, **"Automatically shows"** ? Doesn't it sound similiar to what the `setStateFunc` does for us? Let's store a list of todos in a state.
```javascript
const [todos, setTodos] = useState(["laundry", "homework"])
```
Here, the initial value of the state varibale `todos` is an array with 2 todos. We will use `setTodos` to add more todos to this list. <br/>
#### A button that adds new todo
Let's implement a button that adds new todo. Currently, we have a button that only prints "Click" to the console. Let's make it add new todo to our state variable `todos`. What's the workflow to add a new todo? <br/>
1. read the text that user entered in the textfield <br/>
2. append it to the `todos`. <br/>
3. update the `todos` state.
In the code, this is how it looks like:
```javascript
const handleClick = () => { 
	const newTodo = todoContent; //1: read the text that user entered in the textfield
	todos.push(todoContent);     //2: append it to the `todos`
	const newTodos = [...todos]; //   create a new array to help setStateFunc recognize the update the state
	setTodos(newTodos);             //3: update the `todos` state
	//print the result 
	console.log(todos);
}
```
The `[...todos]` is making a copy of todos. The `...` is called the spread operator in js. If you are interesed, research more about it. I won't talk more about it here. It just clones the array for us here. <br/>
We need to clone the array before calling `setTodos`. If the state value you are using is simple data type (number, string), then you don't need to do the cloning. However, if your state is a complex type (array, object), then you will need to do the cloning. The reason is that in react, it stores a reference to these complex structure, ignorant of the exact content of these structure. If we only add new item to the list, the reference stays the same, react won't realize the update. Are you concerned that cloning is slow? Don't worry. Cloning thousands of items is a piece of cake for js. <br/>
At this point, the `App.js` should look like below:
```javascript
import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
	const [todos, setTodos] = useState(["laundry", "homework"])
	const [todoContent, setTodoContent] = useState('')

	const handleClick = () => { 
		const newTodo = todoContent;
		todos.push(todoContent);
		const newTodos = [...todos];
		setTodos(newTodos);
		//print the result
		console.log(todos);
	}

	const onType = (event) => {
		console.log(todoContent);
		setTodoContent(event.target.value)
	}

	return (
		<div>
			<input
				type='text'
				onChange={onType}
			/>
			<Button variant="primary" onClick={handleClick}>Add</Button>
		</div>
	);
}

export default App;
```
When you type something in the textfield and click the "Add" button, you should see the updated the `todos` in your console. Now the data is ready. We can keep adding the todos to it. Now we need a way to display the data
### Step3: Display a data
As mentioned the the **Overall Structure** section, the `Todos.js` will take a list of todos and display it. Let's do that now. <br/>
We will first create a file called "Todos.js" under the "src" directory. and add some initial code to it. It should look similiar to How the `App.js` looks like at the beginning.
```javascript
import React from 'react';

function Todos(props) {
	return (
		<div> Todos </div>
	);
}

export default Todos;
```
The `Todos.js` now only displays a default text "Todos". We need it to display a list of todos. In HTML, we often use `<ul>` and `<li>` to display such a list. ("ul" stands for "unordered list" and "li" stands for "list item"). The strutcure of it looks like this:
```javascript
<ul>
	<li> item 1 </li>
	<li> item 2 </li>
	...
</ul>
```
Let's add that to our `Todos.js`. Now the `Todos.js` should look like:
```javascript
import React from 'react';

function Todos(props) {
	return (
		<ul>
			<li> item 1 </li>
			<li> item 2 </li>
		</ul>
	);
}

export default Todos;
```
At this point, the `Todos.js` is displaying some defaulted list. The items inside it is "item 1", "item2". But we want it to display the `todos` that's in the `App.js`. How to access this `todos`? Good question! `App.js` will pass the todos via `props`, and the `Todos.js` will access it via `props`! <br/>
The `props` is an important concept in React. Recall `state` manages the data inside a react component. `props` manages the communication of data from parent component to child component. (`App.js` uses `Todos.js`, so `App.js` is the parent component, `Todos.js` the child).  <br/>
<br/>

Inside the `App.js`, it will use the `Todos.js` like below:
```javascript
<Todos todos={todos} />
```
And inside `Todos.js`, it will access the `todos` via props like this:
```javascript
const { todos } = props;
```
Because the `todos` is a list, we can use the **map** function. If you have taken a functional programming course, **map** takes a 2 arguments: a list and a function. It applies the function to each item in the list and return a new list that contains the transformed elements. Let's take a look at how this is done in javasript:
```javascript
todos.map(todo -> <li> {todo} </li>)
```
Here, the `todos` is the list of todos. We call the map function of it. The map takes a function as argument. That function `todo -> <li> {todo} </li>` is transforming each `todo` to `<li> {todo} </li>` to fit inside the `<ul>  </ul>`. Now the `Todos.js` should look like:
```javascript
import React from 'react';

function Todos(props) {
	const { todos } = props;
	return (
		<ul>
			{todos.map(todo => <li> {todo} </li>)}
		</ul>
	);
}

export default Todos;
```
In the end, we import the `Todos.js` in `App.js` and use it. The final `App.js` looks like below:
```javascript
import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Todos from './Todos';

function App() {
	const [todos, setTodos] = useState(["laundry", "homework"])
	const [todoContent, setTodoContent] = useState('')

	const handleClick = () => { 
		const newTodo = todoContent; 
		todos.push(newTodo);
		const newTodos = [...todos];
		setTodos(newTodos);
		console.log(todos);
	}

	const onType = (event) => {
		console.log(todoContent);
		setTodoContent(event.target.value)
	}

	return (
		<div>
			<input
				type='text'
				onChange={onType}
			/> <br/>
			<Button variant="primary" onClick={handleClick}>Add</Button>
			<br/>
			<Todos todos={todos} />
		</div>
	);
}

export default App;
```
#### In the end
Now, going to the website, as you type in new todo in the textfield and click the "add" button, it should add to the todo list. To explain what happens in this process, when you type in new todo in the textfield, the App.js component stores the new todo's content in its state variable `todoContent`. Then as you click the "add" button, the "handleClick" function will be triggered. It grabs the 'todoContent' state value and add it to the 'todos' state value. Calling the "setStateFunc" (setTodoContent, setTodos) will trigger a refresh on the page. The `App.js` passes the todos to 'Todos.js' through props. Then 'Todos.js' just take the todos and display it.
