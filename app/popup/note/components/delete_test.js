import React,{ Component }             from 'react';

export default class DELETE_TEST extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    close(){
        let popupSet = Object.assign({},this.props.popupSet);
        popupSet['display'] = "close";
        this.props.popup( popupSet );
    }

    delete( data ){
        let popupSet = this.props.popupSet;
        this.props.callback( popupSet,data );
    }

    render(){
        return(
            <div className="popup-note-wrap">
                <div className="msg"></div>
                <div className="popup-action">
                    <ul>
                        <li><button className="no" onClick={this.close.bind(this)}>取消</button></li>
                        <li><button className="yes" onClick={this.delete.bind(this,"123")}>確定</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}