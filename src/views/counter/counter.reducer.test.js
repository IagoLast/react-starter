/* global test expect beforeEach describe */
import Reducer from './reducer.js';
import { INCREASE, DECREASE } from './actions';
let state = {};

describe('Counter', () => {
  test('initial state: number is zero', () => {
    expect(Reducer().number).toBe(0);
  });

  beforeEach(() => {
    state.number = 0;
  });

  test('when action is INCREASE state number is incremented', () => {
    expect(Reducer(state, INCREASE).number).toBe(1);
  });

  test('when action is DECREASE state number is incremented', () => {
    expect(Reducer(state, DECREASE).number).toBe(-1);
  });
});
