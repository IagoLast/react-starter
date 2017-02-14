import { INCREASE, DECREASE } from './actions.js';

const INITIAL_STATE = {
  number: 0
};

export default function update(state = INITIAL_STATE, action) {
  switch (action) {
    case INCREASE:
      return {
        number: state.number + action.amount
      };
    case DECREASE:
      return {
        number: state.number - action.amount
      };
    default:
      return state;
  }
}
