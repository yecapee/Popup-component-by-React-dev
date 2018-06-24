import React,{ Component } from 'react';

//Components
import Form                from './form';
import Note                from './note';

import './popup.scss';

export default class Popup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            popupSet : props.popupSet,
        };
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            popupSet : nextProps.popupSet
        })
    }

    popup( display,componentType,data,title,msg ){
        let popupSet  = Object.assign({},this.state.popupSet);
        if( display=="close" ){
            popupSet['display']       = display;
            popupSet['componentType'] = componentType;
            popupSet['title']         = title;
            popupSet['data']          = data;
            popupSet['msg']           = msg;
            this.setState({
                popupSet : popupSet
            })
        }else if( display=="open" ){
        
        }else{
            this.props.callback(popupSet);
        }
    }

    returnView(){
        let popupSet  = Object.assign({},this.state.popupSet);
        let mainType  = popupSet['componentType'][0];
        switch(mainType){
            case "form":
                return <Form popupSet={popupSet}/>
                break;

            case "note":
                return <Note popupSet={popupSet}/>
                break;
        }
    }

    render(){
        return(
            <div id="popup" className={`${this.state.popupSet['display']}`}>
                <div className="popup-mask" onClick={this.popup.bind(this,"close",[],[],"","")}></div>
                <div className="popup-wrap">
                    <div className="popup-content">
                        <div className="popup-head">
                            <h4>{ this.state.popupSet['title'] }</h4>
                            <span className="close fas fa-times" onClick={this.popup.bind(this,"close",[],[],"","")}></span>
                        </div>
                        {this.returnView()}
                        {
                            this.state.popupSet['componentType'][0] == 'note' &&
                                <div className="popup-action">
                                    <ul>
                                        <li><button className="no" onClick={this.popup.bind(this,"close",[],[],"","")}>取消</button></li>
                                        <li><button className="yes" onClick={this.popup.bind(this,"yes",[],[],"","")}>確定</button></li>
                                    </ul>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}