import React from 'react';
import {Link} from 'react-router';

class FootBar extends React.Component{
  render(){
    return(
      <div className="foot-btn" >
        <ul>
          <li className="home"><Link to="home"></Link></li>
          <li className="write"><Link to="follow"></Link></li>
          <li className="my"><Link to="user"></Link></li>
        </ul>
      </div>
    )
  }
}

export default FootBar;