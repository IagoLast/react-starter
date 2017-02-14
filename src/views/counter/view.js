import React from 'react';
import { Link } from 'react-router';
import FancyBtn from '../../components/FancyBtn/fancyBtn.view';
import './counter.css';

const Foo = ({state, increase, decrease}) => (
  <div className="Counter">
    <div className="Counter-header">
      <h2>Total Count</h2>
      <h2>{ state.number }</h2>
    </div>
    <div className="buttons">
      <FancyBtn color="brown" onClick={ decrease } text="Decrement Counter"></FancyBtn>
      <FancyBtn color="mediumseagreen" onClick={ increase } text="Increment Counter"></FancyBtn>
    </div>
    <Link to="/"> Go back to index</Link>
  </div>
);

export default Foo;
