## higher-order-function

```js
function authenticate() {
  // code to authenticate
}

function authorize() {
  // code to authorize
}

function getData(authenticate, authorize) {
  if (authenticate()) {
    if (authorize()) {
      // something...
    }
  }
  
}

```
