import React from 'react';

const Option = props => 
<li className="option">
  <p className="option__text">{props.keyValue+1}.{props.item}</p>
  <button className="button button--link"
    onClick={(e => props.rmvOption(props.keyValue))}
    >Remove
  </button>
</li>

export default Option;