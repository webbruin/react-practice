import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import FootBar from './FootBar';
import Loading from './Loading';

class App extends React.Component{
  componentDidMount(){
    this.props.router.replace('home');
  }
  render(){
    let {bLoading,bNav,bFoot,showNav,hideNav,showFoot,hideFoot} = this.props;
    let path = this.props.router.location.pathname;
    if(/home|follow|column/.test(path)){
      setTimeout(()=>{
        showNav();
        showFoot();
      },0);
    }else if(/user/.test(path)){
      setTimeout(()=>{
        hideNav();
        showFoot();
      },0);
    }else if(/article|login|reg/.test(path)){
      setTimeout(()=>{
        hideNav();
        hideFoot();
      },0)
    }
    return(
      <div>
        <Loading show={bLoading}/>
        {bNav?<NavBar/>:''}
        {this.props.children}
        {bFoot?<FootBar/>:''}
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    bNav:state.bNav,
    bFoot:state.bFoot,
    bLoading:state.bLoading
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    showNav:()=>{
      dispatch({
        type:'SHOW_NAV'
      })
    },
    hideNav:()=>{
      dispatch({
        type:'HIDE_NAV'
      })
    },
    showFoot:()=>{
      dispatch({
        type:'SHOW_FOOT'
      })
    },
    hideFoot:()=>{
      dispatch({
        type:'HIDE_FOOT'
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);