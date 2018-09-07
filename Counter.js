import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    render() {
        <div>
            <span>{this.props.value}</span>
            <button onClick={this.props.onIncreaseClick}>Increase</button>
        </div>
    }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

export default Counter;
