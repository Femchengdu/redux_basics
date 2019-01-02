//.......
import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.redux_state_counter} />
                <CounterControl label="Increment" clicked={this.props.increment_the_counter} />
                <CounterControl label="Decrement" clicked={this.props.decrement_the_counter}  />
                <CounterControl label="Add 5" clicked={this.props.counter_plus_5}  />
                <CounterControl label="Subtract 5" clicked={this.props.counter_minus_5}  />
            </div>
        );
    }
}

// State I want to get from redux and mapped to the props
// This state variable is gotten from redux
// React redux provide the state helper variabl
const stateToProps = state => {
    return {
        redux_state_counter: state.counter
    }
}

// React redux also provides the dispatch helper variable
const dispatchToProps = dispatch => {
    return {
        increment_the_counter: () => dispatch({type: 'INCREMENT'}),
        decrement_the_counter: () => dispatch({type: 'DECREMENT'}),
        counter_minus_5: () => dispatch({type: 'SUBTRACT', value: 5}),
        counter_plus_5: () => dispatch({type: 'ADD', value: 5})
    }
}
// connect is a function that returns a function which takes a component as input
// Thus connect is a function that returns a higher order component

export default connect(stateToProps, dispatchToProps)(Counter);
