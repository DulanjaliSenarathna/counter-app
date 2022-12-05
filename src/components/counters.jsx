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