import './App.css';
import Car from './Car'
import Car2 from './Car2'
import StateTest from './StateTest.js'
import TaskApp from './TaskApp.js'
import TaskAppReducer from './TaskAppReducer.js'
import StatusBar from './StatusBar.js'
import StatusBar2 from './StatusBar2.js'
import Form from './Form.js';

import Goal from './Goal.js'
import TodosApp from './ToDosApp.js';
import Accordion from './Accordian.js';
import TestStyledButton from './TestStyledButton.js';

function App() {
  return (
    <div className="App">
      <header className="MyHeader">

        <h1> This is my header test</h1>

      </header>
      <div className="MyButton">
      <MyFirstButton/>
      </div>
      <Football />
      <Car/>
      <Car2/>
      <Car3 color = "red"/>
      <StateTest/>
      <TaskApp/>
      <p>below is a task app created using a task reducer</p>
      <TaskAppReducer/>
      <StatusBar/>

      <p>this uses custom hooks to </p>
      <div id="taskbar_customhook">
      <StatusBar2/>
      </div>

      <p>this uses a custom hook for the components</p>
      <p>also shows how using custom hooks doesnt link the states together</p>
      <Form/>

      <p>this uses an external store to pull todos from</p>
      <TodosApp/>
      
      <p>Example of states being linked together, when one is open, the other closes</p>
      <Accordion/>

      <p>styled button example</p>
      <TestStyledButton/>
      <Goal isGoal={false} />
      <Goal isGoal={true} />
      
    </div>
  );
}

function MyFirstButton() {
  return (
    <button onClick={clickMe}>click me to change color</button>
  )
}

function clickMe() {
  alert("aaaa")
}

function Car3(props){
  return <h2> this is my car function component with color {props.color} </h2>
}


function Football() {
  const shoot = () => {
    alert("shotted");
  }

  return (
    <button onClick={shoot}>kick ball pls</button>
  );
}



export default App;

