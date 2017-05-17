import React,{Component} from 'react';

class Slider extends React.Component{
  componentDidMount(){
    var mySwipe=new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  }
  render(){
    return(
      <div className="banner">
        <ul className="clearfix">
          <li><img src="src/assets/images/img_1.jpg" alt=""/>
            <div className="text-box">
              <h2>还可以降低首付款健身房11111</h2>
              <p>刘德华11 / 文</p>
            </div>
          </li>
          <li><img src="src/assets/images/img_2.jpg" alt=""/>
            <div className="text-box">
              <h2>还可以降低首付款健身房2222</h2>
              <p>刘德华22 / 文</p>
            </div>
          </li>
          <li><img src="src/assets/images/img_3.jpg" alt=""/>
            <div className="text-box">
              <h2>还可以降低首付款健身房333</h2>
              <p>刘德华33 / 文</p>
            </div>
          </li>
          <li><img src="src/assets/images/img_1.jpg" alt=""/>
            <div className="text-box">
              <h2>还可以降低首付款健身房11111</h2>
              <p>刘德华11 / 文</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Slider;