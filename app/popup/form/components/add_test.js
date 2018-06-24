import React,{ Component }             from 'react';

export default class AddTest extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            formInput : {
                test : ""
            }
        }
    }

    handleChange(e){
        const formInput  = Object.assign({},this.state.formInput);
        const inputName  = e.target.name;
        const inputValue = e.target.value;
        formInput[inputName] = inputValue;

        this.setState({
            formInput : formInput,
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const popupSet      = this.props.popupSet;
        const display       = popupSet['display'];
        const componentType = popupSet['componentType'];
        const data          = popupSet['data'];
        const title         = popupSet['title'];
        const msg           = popupSet['msg'];
        const formInput     = Object.assign({},this.state.formInput);
        this.props.callback( formInput );
        this.props.popup( display,componentType,data,title,msg );
    }

    popup(display,componentType,data,title,msg){
        this.props.popup( display,componentType,data,title,msg );
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <ul className="form-ul">
                    <li>
                        <ul>
                            <li className="label">測試欄位</li>
                            <li className="con">
                                <div className="input-box">
                                    <input type="text" name="test" value={this.state.formInput['test']} onChange={this.handleChange.bind(this)} />
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="action">
                        <button className="no" onClick={this.popup.bind(this)}>取消</button>
                        <button type="submit">送出</button>
                    </li>
                </ul>
            </form>
        );
    }
}