import './App.css';
import Car from './Car'
import Car2 from './Car2'

function App() {
  return (
    <div className="App">
      <header className="MyHeader">

        <h1> This is my header test</h1>

      </header>
      <div className="MyButton">
      <MyFirstButton/>
      <Football />
      <App />
      <Car/>
      <Car2/>
      {/* <Car color = "red"/> */}
      </div>
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

// function Car(props){
//   return <h2> this is my car function component with color {props.color} </h2>
// }


function Football() {
  const shoot = () => {
    alert("shotted");
  }

  return (
    <button onClick={shoot}>kick ball pls</button>
  );
}


export default App;

