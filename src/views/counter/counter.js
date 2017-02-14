import view from './view';
import { connect } from 'react-redux';
import { INCREASE, DECREASE } from './actions.js';



const mapStateToProps = (state) => {
  return {
    state: state.default.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => {
      dispatch(INCREASE);
    },
    decrease: () => {
      dispatch(DECREASE);
    }
  };
};

const FooContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(view);

export default FooContainer;
