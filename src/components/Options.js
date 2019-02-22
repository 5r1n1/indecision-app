import React from 'react';
import Option from './Option';

const Options = props =>
<div>
  {!props.opt.length && <p>Please Add an option to the list</p>}
  <ol>
    {props.opt.map ((itm, idx) => 
      <Option 
        key={idx}
        keyValue={idx}
        item={itm}
        rmvOption={props.rmvOpt} />
    )}
  </ol>
</div>

export default Options;