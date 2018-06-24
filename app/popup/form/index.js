import React,{ Component } from 'react';

//Components
import {COMPONENTS_FORM_LIST} from './components/component_list';

export default class FormIndex extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            popupSet : props.popupSet
        }
    }

    componentDidMount() {
        console.log( COMPONENTS_FORM_LIST );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            popupSet : nextProps.popupSet
        })
    }

    selectWantRenderView(){
        
        const popupSet          = Object.assign({},this.state.popupSet);
        const ACTION_TYPE_RULE  = ["add","update","delete"];
        const ACTION_TYPE       = popupSet['componentType'][1] || "";

        if( ACTION_TYPE_RULE.includes(ACTION_TYPE) ){   
            const ACTION_TYPE_KEY = popupSet['componentType'][2];
            const IMPORT_COMPONENT_NAME = COMPONENTS_FORM_LIST[ACTION_TYPE][ACTION_TYPE_KEY];
            return <IMPORT_COMPONENT_NAME />
        }
    }

    render(){
        return (
            <div className="popup-form-wrap">
                { this.selectWantRenderView() }
            </div>
        );
    }
}