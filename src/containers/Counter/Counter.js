import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import {
  add,
  subtract,
  increment,
  decrement,
  storeResult,
  deleteResult,
} from "../../store/actions/index";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <br />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.results.map((result, index) => (
            <li key={index} onClick={() => this.props.onDeleteResult(index)}>
              {result}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.globalCounter.counter,
    results: state.globalResults.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add()),
    onSubtractCounter: () => dispatch(subtract()),
    onStoreResult: (value) => dispatch(storeResult(value)),
    onDeleteResult: (index) => dispatch(deleteResult(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
