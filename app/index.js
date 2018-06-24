import React,{ Component }                            from 'react';
import ReactDOM                                       from 'react-dom';
import { Provider,connect }                           from 'react-redux';
import { BrowserRouter, Route, Link, HashRouter }     from 'react-router-dom';

import Popup from './popup';

import './style.scss';

export default class Index extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      popupSet : {
        display           : "close",
        componentType     : [],
        title             : "",
        data              : [],
        msg               : ""
      }
    }
  }

  popup( display,componentType,data,title,msg ){
    let popupSet  = Object.assign({},this.state.popupSet);
    popupSet['display']       = display;
    popupSet['componentType'] = componentType;
    popupSet['title']         = title;
    popupSet['data']          = data;
    popupSet['msg']           = msg;
    this.setState({
      popupSet : popupSet
    })
  }

  callbackPopupReturn( popupSet,callbackVal ){
    console.log('====================================');
    console.log('----',popupSet,callbackVal);
    console.log('====================================');
  }

  render(){
    return(
      <div id="wrapper">
        <ul className="demo-ul">
          <li><button onClick={this.popup.bind(this,"open",["note","msg","SUCCESS_TEST"],[],"警告視窗","")}>警告視窗（ Note ）</button></li>
          <li><button onClick={this.popup.bind(this,"open",["note","delete","DELETE_TEST"],[],"你確定要刪除XXX","")}>刪除視窗（ Delete ）</button></li>
          <li><button onClick={this.popup.bind(this,"open",["form","add","test"],[],"表單視窗","")}>表單視窗（ Form ）</button></li>
        </ul>
        <Popup popupSet={this.state.popupSet} callback={this.callbackPopupReturn.bind(this)}/>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Index/>,app);
