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
The directory **node_modules** contains all the project dependecies (It's huge, don't look into it). The file **package.json** keeps track of all the dependencies. From now on, everything you do will be under this directory. You will work exclusively on the App.js.
<br/><br/>
## setup react-bootstrap 
Let's install one more package so you are ready to go
~~~
npm install --save react-bootstrap
~~~
The `--save` option tells npm to keep a record on the package.json file. `react-bootstrap` is a UI library that we will use (make you life much easier).
<br/><br/>
In order to have the bootstrap style work on our project, we need toits style sheet. Open `public/index.html` and paste the following line under the `<head>` tag
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
~~~
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
~~~
I want you to delete everything inbetween the `<div>` tag, and write write down 'hello world'. So you should be left with 
~~~
<div>
  Hello World
</div>
~~~
After you save the file, your browser should automatically update its content. Did your browser say 'hello world'?
<br/><br/>
Now, let's make something sorta functional.
<br/><br/>
Let's add the following line to import a button from `react-bootstrap`
~~~
import { Button } from 'react-bootstrap'
~~~
And now let's use the button and add little style and function to it. More info about the bootstrap button (or any other components in general), go to https://react-bootstrap.github.io/components/buttons/ for more.
<br/>
Your App.js should now look lile
~~~
import React, from 'react';
import './App.css';
import { Button, Form, Card, ListGroup } from 'react-bootstrap';

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
~~~
The `import { ... } from '...'` is importing code from the package you already installed. In this case, we are importing a button component. <br/><br/>
The `function App() {...}` is actually a React Component called "functional component". In the old React syntax, you might have seen it written as `class App extends Component { ... }` (class component). They are not exactly the same thing. The main difference is that when using state in the component, class component will rely on setting up `this.state` and using `setState()` to update the state. Whereas functional component relies on using **react hooks** to manage state. React hooks gives us a much more clean styling of code. This todo app will be using react hooks. If these does make much sense to you yet, don't panic. We will talke more about it later.<br/><br/>
The `variant` gives the style to the button.<br/>
And we passed a function to the `onClick` props of the button, so when you click it, it will execute the function body. Save the file, and go to the browser, you should see a blue button waiting to be clicked.<br/>
<br/>
Click it! But wait, we did the output go? Remember `console.log('..')` prints something? Where is it printed? <br/>
The answer is to the browser console. Right-click on a blank space on your browser and click `inspect` (I assume you are using google chrome). You should see a toolbar popup (either from the right or from bottom). Now click the `console` on top of the toolbar. Did you see the output? What happens if you click the button a few more times?
## Let's build a todo-app
Let's build a todo-app. In this process, you will use some functions to manipulate JS arrays such as **map, concat, push, slice...** <br/>
Also, you will learn to use react state via using react hooks. 

#### Step1: make a textfield
It's a todo-app. We need a way to type in the todo item. A textfield is a nice way to do that. In react-bootstrap, this component will give you a textfield:
~~~
<Form.Control
  type='text'
  onChange={e => console.log(e.target.value)}
/>
~~~
It's better to extrack that `onChange` function out, so let's define a new function `onType` within the app component.
~~~
const onType = (event) => {
  console.log(event.target.value);
}
~~~
The `event` is the argument passed in to the `onType` function when user enters any text on the textfield. `event.target` refers the textfield itself. `event.target.value` is the actual text inside the textfield. 
Then, substitue the `onChange` function with the `onType` fuction. Your final `App.js` should look like:
~~~
import React from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';

function App() {
	const handleClick = () => { 
		console.log("Click");
	}

	const onType = (event) => {
		console.log(event.target.value);
	}

	return (
		<div>
			<Form.Control
				type='text'
				onChange={onType}
			/>
			<Button variant="primary" onClick={handleClick}>Add</Button>
		</div>
	);
}

export default App;
~~~
Now go to the browser. As you type text in the textfield, what do you see in the browser?
#### Introducing state (and react hooks)
The text in the textfield only lives in `event.target.value`. We would like to save it in some variable such that as the `event.target.value` changes, the variable value changes; Also, we want this variable be used anywhere in this component. To achieve this, we will use `state`. No more words, let's take a look the code on how to make a state:
~~~
const [todoContent, setTodoContent] = useState('')
~~~
`useState(initialValue)` is the function that allows functional components to use state. It takes an initial value as argument (can be any type) and returns a pair `[stateVar, setStateFunc]`. The `stateVar` is used to read the state value, and `setStateFunc` is used to set the state value. It's better to illustrate with an example, we will see how the textfield value is stored in the state variable, how we read the variable and how we update the variable. All of these will be inside the `onType` function:
~~~
const onType = (event) => {
  console.log(todoContent);
  setTodoContent(event.target.value)
}
~~~
The `console.log(todoContent)` is reading the state value, and the `setTodoContent(event.target.value)` is setting the state value with the new value. <br/>
Now the whole `App.js` should look like:
~~~
import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';

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
			<Form.Control
				type='text'
				onChange={onType}
			/>
			<Button variant="primary" onClick={handleClick}>Add</Button>
		</div>
	);
}

export default App;
~~~
## You Are On Your Own...
Ok. From now on, You are on your own. The goal is to make a todo list that handles adding and deleting items. For you reference, go to https://todo-cdf07.firebaseapp.com/ to get a sense of it.
<br/> <br/>
Of course, I will tell you guys what you need to know in order to finish the project, and also give you some useful hints: <br/><br/>
#### Need to know
1. About JS, you need to know some array manipulations such as **map, concat, push, slice...** <br/>
2. About React, you need to know: **state**, **setState**
3. Doing Codecademy on React will help a little little little little bit. Just that little bit.
#### Useful hints
1. `<Form.Control type='text' ref={input => this.textInput = input}/>` This gives you a textfield and you can get the value of the textfiled by `this.textInput.value` <br/><br/>
2. If you encounter an error says something like "cannot call <functionName> of undefined", this is due to a JS error called 'closure'. It's a simple-complicated error. But a quick fix is to add 
~~~
this.<functionName> = this.<functionName>.bind(this)
~~~
to the constructor of your component. <br/>
And example of a consturctor looks like
~~~
  constructor(props){
    super(props)
    ....
  }
~~~
Alright. You are on your own. When you encounter a problem, try googling it. If you can't find a solution or you are just stuck, even or you find a bug in this writeup, let me know. I have your back. I believe this can be done in one week. Emmmmm. There might be a lot of material to digest. So, let's take 2 weeks to finish this. You can do it.
