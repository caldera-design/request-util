Caldera Request Util
---------------
Caldera's request util is a simple wrapper of `isomorphic-fetch` that automatically serializes query parameters (with `querystring`) and automatically JSON stringifies the body. It returns a `bluebird` Promise.

Dependencies:
============
- Since Request util uses `isomorphic-fetch`, it will work just as well in [Node](http://nodejs.org/) as it will in the browser.

Installation
============
Use [npm](https://www.npmjs.com/) to install:
```bash
npm install caldera-request-util
```

Usage
============
Usage is very simple:

```javascript
import { postRequest } from 'caldera-request-util';

postRequest({
    url: 'http://myapi.com',
    query: {
        param: 'Query params are serialized'
    },
    body: {
        about: 'The body is converted to a JSON string.'
    }
})
.then(() => {
    console.log('It returns a bluebird promise.');
})
```

Copyright and License
============
Code and documentation copyright 2017 Jon Brennecke. Code released under the MIT license. Docs released under Creative Commons.
