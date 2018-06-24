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

  callbackPopup( callbackVal ){
    console.log('====================================');
    console.log(callbackVal);
    console.log('====================================');
  }

  render(){
    return(
      <div id="wrapper">
        <ul className="demo-ul">
          <li><button onClick={this.popup.bind(this,"open",["note"],[],"警告視窗","")}>警告視窗（ Note ）</button></li>
          <li><button onClick={this.popup.bind(this,"open",["form","add","test"],[],"表單視窗","")}>表單視窗（ Form ）</button></li>
        </ul>
        <Popup popupSet={this.state.popupSet} callback={this.callbackPopup.bind(this)}/>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Index/>,app);
