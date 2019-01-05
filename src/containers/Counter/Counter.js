//............
import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as action_types from '../../store/actions';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.redux_state_counter} />
                <CounterControl label="Increment" clicked={this.props.increment_the_counter} />
                <CounterControl label="Decrement" clicked={this.props.decrement_the_counter}  />
                <CounterControl label="Add 5" clicked={this.props.counter_plus_5}  />
                <CounterControl label="Subtract 5" clicked={this.props.counter_minus_5}  />
                <hr />
                <button onClick={() => this.props.store_result(this.props.redux_state_counter)}>Store Result</button>
                {/*
                    Using an anonymous fuction to wrap our function reference allows the passing of an agrs to the wrapped fucntion reference.
                    The anonymous '() => function()' fuction isn't executed when the object is rendered.
                    It is wired to the onClick event listener.
                    Because of this, we can add a '()' to the wrapped fuction reference in the anonymous fuction.
                    This enables us to pass arguments  to the wrapped fucntion and the wrapped fucntion
                    wouldn't be called until the anonymous fuction itself is called.
                    
                */}
                <ul>
                    {
                        this.props.stored_result.map(result => (
                            <li key={result.id} onClick={() => this.props.delete_result(result.id)}>{result.value}</li>
                        ))
                    
                    }
                </ul>
            </div>
        );
    }
}

// State I want to get from redux and mapped to the props
// This state variable is gotten from redux
// React redux provide the state helper variabl
const stateToProps = state => {
    return {
        redux_state_counter: state.cnt_reducer.counter,
        stored_result: state.res_reducer.results
    }
}

// React redux also provides the dispatch helper variable
const dispatchToProps = dispatch => {
    return {
        increment_the_counter: () => dispatch({type: action_types.add_one}),
        decrement_the_counter: () => dispatch({type: action_types.sub_one}),
        counter_minus_5: () => dispatch({type: action_types.sub_five, value: 5}),
        counter_plus_5: () => dispatch({type: action_types.add_five, value: 5}),
        store_result: (counter_value) => dispatch({type: action_types.add_to_array, counter_value: counter_value}),
        delete_result: (id) => dispatch({type: action_types.del_from_array, arr_id: id })
    }
}
// connect is a function that returns a function which takes a component as input
// Thus connect is a function that returns a higher order component

export default connect(stateToProps, dispatchToProps)(Counter);
