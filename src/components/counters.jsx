import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
    

    render() { 
        return (

        <div>
            <button onClick={this.props.onReset} className='btn btn-primary btn-sm m-2'>
                Reset
            </button>
           {this.props.counters.map(counter => (
           <Counter 
           key={counter.id} 
           onDelete={this.props.onDelete}
           onIncrement ={this.props.onIncrement}
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