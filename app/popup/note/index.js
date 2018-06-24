import React,{Component} from 'react';

export default class NoteIndecx extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            popupSet : props.popupSet
        }
    }

    componentDidMount() {
        console.log('fuck');
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            popupSet : nextProps.popupSet
        })
    }

    render(){
        return(
            <div className="popup-note-wrap">
               Note
            </div>
        );
    }
}