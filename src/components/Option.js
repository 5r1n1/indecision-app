import React from 'react';

const Option = props => 
<li>
  {props.item}
  <button 
    onClick={(e => props.rmvOption(props.keyValue))}
    >Remove
  </button>
</li>

export default Option;