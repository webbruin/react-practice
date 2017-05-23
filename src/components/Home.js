import React from 'react';
import {connect} from 'react-redux';
import Slider from './Slider';
import NewList from './NewList';

class Home extends React.Component{
  constructor(){
    super();
    this.state={
      arr:[]
    }
    this.bMounted = true;
    this.getHomeData = this.getHomeData.bind(this);
  }
  componentDidMount(){
    this.getHomeData();
  }
  componentWillUnomunt(){
    this.bMounted = false;
  }
  getHomeData(){
    let {showLoading,hideLoading} = this.props;
    showLoading();
    let url = 'http://localhost:3000/article';
    fetch(url).then((res)=>{
      console.log("我连到后台了");
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
      alert('NewList-error');
    })
  }
  render(){
    let {arr} = this.state;
    return(
      <div className="home">
        <Slider/>
        <NewList dataName="home" arr={arr}/>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{return {}}

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
)(Home);