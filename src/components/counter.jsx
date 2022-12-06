import React, { Component } from 'react';

 class Counter extends Component {

    //constructor(){ //line 20 arrow function karapu eka wenuwata mekath hari
        //super();
        //this.handleIncrement = this.handleIncrement.bind(this);
    //}

    render() { 
        //console.log('props',this.props);//props = properties/attributes of this element (Counter)
        console.log('counter rendered');
        return (
        <div> 
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={()=> this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increament</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
        </div>
        ) ;//jsx expression
        //line 19 - in js , true && 'some text' => output is => some text , reason for that js converts string to truthy or falsy value and compare it with first value
    }

    //set badge color orange when count = 0
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value ===0)? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter; //instead of => this.state.count, we can use 'count'
        return value ===0 ? 'Zero' : value;

    }
}
 
export default Counter;//can be add export default to begining of the class counter