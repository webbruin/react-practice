import React from 'react';
import '../assets/css/article.css';
import {date} from '../filter/commen';

class Article extends React.Component{
  constructor(){
    super();
    this.state={
      arr:[]
    };
    this.getData=this.getData.bind(this);
  }
  componentDidMount(){
    this.getData();
  }
  getData(){
    let dataName=this.props.router.location.query.dataName;
    // let url="http://localhost:8001/src/data/article-"+dataName+".data";
    let url = 'http://localhost:3000/detail_'+dataName;
    console.log('**************',url);
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        this.setState({
          arr:data
        });
      });
    }).catch(()=>{
      console.log('Article connect error')
    })
  }
  render(){
    let now = this.props.params.aid-1;
    let arr = this.state.arr[now];
    return(
      <div className="article">
        <div className="nav">
          <ul>
            <li className="l-btn" onClick={this.props.router.goBack}></li>
          </ul>
        </div>
        <div className="content">
          <div className="cont">
            <h3>{arr?arr.title:''}</h3>
            <div className="time"><p>{arr?date(arr.time):''} <span><img src="src/assets/img/zan.png" alt=""/></span></p></div>
            <div className="text-box">{arr?arr.content:''}</div>
          </div>
        </div>
        <div className="foot-btn">
          <ul>
            <li className="say"><a href="javascript:;">
              <i></i><span>0</span>
            </a></li>
            <li className="zan"><a href="javascript:;">
              <i></i><span>0</span>
            </a></li>
            <li className="xing"><a href="javascript:;">
              <i><img src="src/assets/img/xing.png" alt=""/></i>
            </a></li>
            <li className="fx"><a href="javascript:;">
              <i><img src="src/assets/img/fx.png" alt=""/></i>
            </a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Article;