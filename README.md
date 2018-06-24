# Popup-component-by-React-dev
彈跳視窗 React 元件

## constructor 設定
```js
  constructor(props){
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
```

## 

## Render Popup
```js
  render(){
    return <Popup popupSet={this.state.popupSet} callback={this.callbackPopup.bind(this)}/>;
  }
```

## Callback return
```js
  callbackPopup( val){
    console.log( callbackVal );
  }
```

## Callback Popup
```js
  popup(){
    const popupSet = Object.assgin({},this.state.popupSet);
    popupSet = { ...popupSet, "display":"open", componentType:[], data:[], title: "", msg:"" }
    
    this.setState({
      popupSet : popupSet
    })
  }
```

## Dir
popup
- index.js
- popup.scss
- form
  - index.js
  - component
    - component_list.js
    - add_test.js
- note
  - index.js
  - component
    - component_list.js
    - add_test.js
