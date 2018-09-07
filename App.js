import { connect } from 'react-redux'
import Counter from './Counter';

function mapStateToProps(state) {
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default App;

