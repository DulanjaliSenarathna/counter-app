import React, { Component } from 'react';

 class Counter extends Component {

    state = {
        count:1
    };
    
    render() { 
        
        return (
        <div> 
            <span className='badge badge-primary m-2'>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increament</button>
        </div>
        ) ;//jsx expression
    }

    formatCount(){
        const {count} = this.state; //instead of => this.state.count, we can use 'count'
        return count ===0 ? 'Zero' : count;

    }
}
 
export default Counter;//can be add export default to begining of the class counter