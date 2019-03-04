import React from 'react';
import Option from './Option';

const Options = props =>
<div>
  <div className="widget-header">
  <h3 className="widget-header__title">Your options</h3>
    <button
      className="button button--link"
      onClick={(e => props.rmvAll())}
      >Remove All
    </button>
  </div>
  {!props.opt.length && <p className="widget-message">Please Add an option to the list</p>}
  <ol className="number">
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