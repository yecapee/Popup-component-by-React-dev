import React,{ Component }             from 'react';

export default class SUCCESS_TEST extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    popup( display,componentType,data,title,msg ){
        this.props.popup( display,componentType,data,title,msg );
    }

    render(){
        return(
            <div className="popup-note-wrap">
                <div className="msg"></div>
                <div className="popup-action">
                    <ul>
                        <li><button className="yes" onClick={this.popup.bind(this,"close",[],[],"","")}>確定</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}