import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters : [
            {id: 1 , value : 4},
            {id: 2 , value : 0},
            {id: 3 , value : 0},
            {id: 4 , value : 0},
        ]
     } ;

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

    render() { 
        return (

        <div>
            <button onClick={this.handleReset} className='btn btn-primary btn-sm m-2'>
                Reset
            </button>
           {this.state.counters.map(counter => (
           <Counter 
           key={counter.id} 
           onDelete={this.handleDelete}
           onIncrement ={this.handleIncrement}
          // value={counter.value}  instead of adding separate props, it's easy to add counter object. then we can access all prperties inside it
          // selected={counter.selected} 
          counter={counter}
           >
            </Counter>
           ))}
        </div>
        );
    }
}
 
export default Counters;