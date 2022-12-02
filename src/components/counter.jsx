import React, { Component } from 'react';

 class Counter extends Component {

    state = {
        count:0
    };
    
    render() { 
        
        return (
        <div> 
            <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increament</button>
        </div>
        ) ;//jsx expression
    }

    //set badge color orange when count = 0
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.state.count ===0)? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state; //instead of => this.state.count, we can use 'count'
        return count ===0 ? 'Zero' : count;

    }
}
 
export default Counter;//can be add export default to begining of the class counter