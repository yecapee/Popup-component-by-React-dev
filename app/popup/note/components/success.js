import React,{ Component }             from 'react';

export default class SUCCESS_TEST extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    popup( popupSet ){
        popupSet['display'] = "close";
        this.props.popup( popupSet );
    }

    render(){
        return(
            <div className="popup-note-wrap">
                <div className="msg"></div>
                <div className="popup-action">
                    <ul>
                        <li><button className="yes" onClick={this.popup.bind(this,this.props.popupSet)}>確定</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}