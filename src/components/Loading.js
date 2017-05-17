import React from 'react';
import '../assets/css/loading.css';

const Loading = (props)=>{
  let show = props.show||false;
  let color = props.color||'rgb(84,119,178)';
  let loading = <div className="spinner">
    <div className="rect1"></div>
    <div className="rect2"></div>
    <div className="rect3"></div>
    <div className="rect4"></div>
    <div className="rect5"></div>
  </div>

  return(
    <div>
      {show?loading:''}
    </div>
  )
}

export default Loading;