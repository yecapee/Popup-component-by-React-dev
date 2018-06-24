import React,{ Component } from 'react';

//Components
import Form                from './form';
import Note                from './note';

import './popup.scss';

export default class Popup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            popupSet : props.popupSet || {},
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            popupSet : nextProps.popupSet
        })
    }

    popup( popupSet ){
        if( popupSet['display']=="close" ){
            popupSet['componentType'] = [];
            popupSet['data']          = [];
            popupSet['title']         = "";
            popupSet['msg']           = "";
        }
        this.setState({
            popupSet : popupSet
        })
    }

    mask(){
        let popupSet = Object.assign({},this.state.popupSet);
        popupSet['display'] = "close";
        this.popup(popupSet);
    }

    returnView(){
        let popupSet  = Object.assign({},this.state.popupSet);
        let mainType  = popupSet['componentType'][0];
        switch(mainType){
            case "form":
                return <Form popupSet={popupSet} callback={this.props.callback} popup={this.popup.bind(this)}/>
                break;

            case "note":
                return <Note popupSet={popupSet} callback={this.props.callback} popup={this.popup.bind(this)}/>
                break;
        }
    }

    render(){
        return(
            <div id="popup" className={`${this.state.popupSet['display']}`}>
                <div className="popup-mask" onClick={this.mask.bind(this)}></div>
                <div className="popup-wrap">
                    <div className="popup-content">
                        <div className="popup-head">
                            <h4>{ this.state.popupSet['title'] }</h4>
                            <span className="close fas fa-times" onClick={this.popup.bind(this,"close",[],[],"","")}></span>
                        </div>
                        {this.returnView()}
                    </div>
                </div>
            </div>
        );
    }
}