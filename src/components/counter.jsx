import React, { Component } from 'react';

 class Counter extends Component {

    state = {
        count:0,
        tags : ["tag1","tag2","tag3"] //array of tags
    };
    
    render() { 
        
        return (
        <div> 
            <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increament</button>
            <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        </div>//react needs unique key values to check the virtual DOM changes to compare with previous elements.in this case we assume every tags different from each other
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