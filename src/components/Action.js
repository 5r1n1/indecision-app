import React from 'react';

const Action = props =>
<div>
  <button 
    onClick={(e => props.rmvAll())}
    >Remove All Options
  </button>
  <button 
    disabled = {!props.opt.length}
    onClick = {(e => props.handlePick())}
    >What should I do?
  </button>
</div>

export default Action;