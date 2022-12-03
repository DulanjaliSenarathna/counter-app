import React, { Component } from 'react';

 class Counter extends Component {

    state = {
        count:0,
        tags : ["tag1","tag2","tag3"],//array of tags
        product:'k'
    };

    //constructor(){ //line 20 arrow function karapu eka wenuwata mekath hari
        //super();
        //this.handleIncrement = this.handleIncrement.bind(this);
    //}

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>; //react needs unique key values to check the virtual DOM changes to compare with previous elements.in this case we assume every tags different from each other
    }

    handleIncrement = product => {
        console.log(product);
        this.setState({count : this.state.count+1}); //setState is a built in method of Component module, it aware of the state changes
    };
    
    render() { 
        
        return (
        <div> 
            {this.state.tags.length ===0 && 'Please create a new tag!'}
            {this.renderTags()}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.handleIncrement(product)} className='btn btn-secondary btn-sm'>Increament</button>
        </div>
        ) ;//jsx expression
        //line 19 - in js , true && 'some text' => output is => some text , reason for that js converts string to truthy or falsy value and compare it with first value
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