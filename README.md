# sender
Library for sending requests to servers

## Usage code example

```js
const sender = require('edsukraine-sender')

const url = 'https://jsonplaceholder.typicode.com/users'

sender('GET', url)
  .then(data => console.log(data))
  .catch((e) => console.log('error', e))

const body = {
  name: 'Andrii',
  age: 29
}

sender('POST', url, body)
  .then(data => console.log(data))
  .catch(() => console.log('error'))
```

## Usage Repository Example

### Link to repository

[https://github.com/edsukraine/sender-usage-example](https://github.com/edsukraine/sender-usage-example)

### Try it now

```
git clone https://github.com/edsukraine/sender-usage-example.git
```

```
cd sender-usage-example
```

```
npm install
```

```
parcel index.html
```

Open **http://localhost:1234/** in browser