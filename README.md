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
