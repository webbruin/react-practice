import React from 'react';
import {connect} from 'react-redux';
import NavList from './NewList';

class Follow extends React.Component{
  constructor(){
    super();
    this.state={
      arr:[]
    }
    this.bMounted = true;
    this.getFollowData = this.getFollowData.bind(this);
  }
  componentDidMount(){
    this.getFollowData();
  }
  componentWillUnmount(){
    this.bMounted = false;
  }
  getFollowData(){
    let {showLoading,hideLoading} = this.props;
    showLoading();
    let url = 'http://localhost:3000/follow';
    fetch(url).then((res)=>{
      if(res.ok){
        res.json().then((data)=>{
          setTimeout(()=>{
            hideLoading();
            if(!this.bMounted) return;
            this.setState({
              arr:data
            })
          },1000)
        })
      }
    }).catch((error)=>{
      alert('Follow-error');
    })
  }
  render(){
    let arr =this.state.arr;
    return(
      <div className="newsList">
        <ul>
          <NavList dataName="follow" arr={arr}></NavList>
        </ul>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {}
}

const mapDispatchToProps=(dispatch)=>{
  return {
    showLoading:()=>{
      dispatch({
        type:'SHOW_LOADING'
      })
    },
    hideLoading:()=>{
      dispatch({
        type:'HIDE_LOADING'
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follow);