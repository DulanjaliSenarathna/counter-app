import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import { Component } from 'react';

class App extends Component{
  render(){
  return (
    <>
    <NavBar/>
    <main className='container'>
      <Counters/>
    </main>
    </>
  );
}
}

export default App;
//previous we pass parent component's state to the child component via props, using parent-child relationship.
//but now component tree=> App =>> NavBar , Counters(=> Counter) . No parent-child relationship between Navbar and Counters.
//in this case, we lift  the state of the Counters component to App(parent) component.
//then we can pass the state using props to all the children