import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import { Component } from 'react';

class App extends Component{
  state = { 
    counters : [
        {id: 1 , value : 4},
        {id: 2 , value : 0},
        {id: 3 , value : 0},
        {id: 4 , value : 0},
    ]
 } ;

 constructor(){
  super();
  console.log('App constructor');
  //this.state = this.props.somthing; //initialize properties of state (set state , based on the props that received from the outside)
 }; //constructor calls only when instance of class created

 componentDidMount(){//this method calls, after component is rendered in to the DOM, best place to make Ajax calls for get data from server
  //Ajax call
  console.log('App mounted'); 
 }; 

 handleIncrement = counter =>{
    //create a new counters array and give it to the setState method
    const counters = [...this.state.counters];//cloning counters array to new counter array
    const index = counters.indexOf(counter);
    counters[index] = {...counter};//clone the parameter of the handleIncrement function 
    counters[index].value++;
    console.log(this.state.counters[0]);
    this.setState({counters});
 };

 handleReset = () =>{
    const counters =  this.state.counters.map( c => {
       c.value = 0;
       return c;
    });
    this.setState({counters});
 };

 handleDelete = (counterID)=>{
   const counters = this.state.counters.filter(c => c.id !== counterID);
   this.setState({counters});
 }
  render(){
    console.log('App rendered');
  return (
    <>
    <NavBar
    totalCounters = {this.state.counters.filter(c => c.value>0).length}
    />
    <main className='container'>
      <Counters 
      counters={this.state.counters}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDelete={this.handleDelete}
      />
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