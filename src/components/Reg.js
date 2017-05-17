import React from 'react';
import '../assets/css/reg.css';
import {Link} from 'react-router';

class Reg extends React.Component{
  render(){
    return(
      <div className="content">
        <p className="fhbtn">
          <a href="javascript:;" onClick={this.props.router.goBack}></a>
        </p>
        <h1 className="reg"></h1>
        <div className="login-box">
          <p className="lsolid"></p>
          <div className="login">
            <Link to="login">登录</Link>
            <span></span>
            <Link to="reg">注册</Link>
          </div>
          <p className="rsolid"></p>
        </div>
        <ul>
          <li className="lifirst">
            <input type="text" value=""/>
            <span>帐号</span>
          </li>
          <li>
            <input type="text" value=""/>
            <span>密码</span>
          </li>
        </ul>
        <div className="footbox">
          <input type="button" value="注 册" className="login-btn"/>
          <a href="javascript:;" className="tishi">忘记密码？</a>
        </div>
      </div>
    )
  }
}

export default Reg;