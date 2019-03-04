import React from 'react';

const Header = props => 
<div className="container">
  <div className="header">
    <h1 className="header__title">{props.title}</h1>
    {props.subtitle && <h4 className="header__subtitle">{props.subtitle}</h4>}
  </div>
</div>

export default Header;