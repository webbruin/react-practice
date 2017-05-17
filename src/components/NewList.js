import React from 'react';
import {Link} from 'react-router';

class NewList extends React.Component{
  render(){
    let {arr,dataName} = this.props;
    return(
      <div className="newsList">
        <ul>
          {
            arr.map((val,index)=>{
              return(
                <li key={val.id}>
                  <Link to={{
                    pathname:'article/'+val.id,
                    query:{dataName:dataName}
                  }}>
                    <h2>{val.id}.{val.title}</h2>
                    <p>{val.detail}</p>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default NewList;