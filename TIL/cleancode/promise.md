## promise

```js
const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(error => reject(error)
  })
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error))
```
