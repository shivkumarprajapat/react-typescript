import React from 'react';
import logo from './logo.svg';
import './App.css';

function sum(a: number, b: number) {
  return a + b
}
interface Props {
  a: number;
  b: number
}

function SumComonent(props: Props) {
  return <>{props.a + props.b}</>
}
function App() {

  const value = sum(5, 6)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sum of to number {value}</h1>
        <h1>Sum of to number <SumComonent a={5} b={6} /></h1>
      </header>
    </div>
  );
}

export default App;