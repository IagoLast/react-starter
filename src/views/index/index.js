import view from './view';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    number: state.default.counter.number,
  };
};

const IndexContainer = connect(mapStateToProps)(view);

export default IndexContainer;
