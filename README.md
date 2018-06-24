# Popup-component-by-React-dev
彈跳視窗 React 元件

## API
| Name                  | Type       | Description                                         |
|-----------------------|------------|----------------------------------------------|
| display               | string     | "close" or "open"                                   |
| componentType         | object     | componentType[0]="form" or "note" ; componentType[1]="add" or "update" or "delete" or "msg"  ; componentType[3]= "component Key name"  |
| title                 | string     | 視窗表頭名稱                                          |
| data                  | object     | 選到的值如果是object形式，可放在此讓 popup 視窗內部可以調用 |
| msg                   | string     | 訊息                                                 |

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

## Render Popup
```js
  render(){
    return <Popup popupSet={this.state.popupSet} callback={this.callbackPopup.bind(this)}/>;
  }
```

## Callback return
```js
  callbackPopup( popupSet,callbackVal){
    console.log( popupSet,callbackVal );
    //redux
    this.props.dispatch( ActionFunctionName(popupSet,callbackVal) );
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
