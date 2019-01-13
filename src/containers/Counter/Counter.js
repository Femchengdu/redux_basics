//............
import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
//import * as action_types from '../../store/actions';
import * as action_types from '../../store/actions/index';

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
        increment_the_counter: () => dispatch(action_types.add_one_creator()),
        decrement_the_counter: () => dispatch(action_types.sub_one_creator()),
        counter_minus_5: () => dispatch(action_types.sub_five_creator(5)),
        counter_plus_5: () => dispatch(action_types.add_five_creator(5)),
        store_result: (counter_value) => dispatch(action_types.add_to_array_creator(counter_value)),
        delete_result: (id) => dispatch(action_types.del_from_array_creator(id))
    }
}
// connect is a function that returns a function which takes a component as input
// Thus connect is a function that returns a higher order component

export default connect(stateToProps, dispatchToProps)(Counter);
