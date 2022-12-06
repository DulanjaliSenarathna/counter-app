import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {  

    render() { 

        console.log('counters rendered');

        const {onReset, counters, onDelete, onIncrement,onDecrement} = this.props;//destructuring
        return (

        <div>
            <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
                Reset
            </button>
           {this.props.counters.map(counter => (
           <Counter 
           key={counter.id} 
           onDelete={onDelete}
           onIncrement ={onIncrement}
           onDecrement = {onDecrement}
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