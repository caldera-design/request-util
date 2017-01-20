Caldera Request Util
---------------
Caldera's request util is a simple wrapper of 'isomorphic-fetch' that automatically serializes query parameters (with `querystring`) and automatically JSON stringifies the body. It returns a `bluebird` Promise.

Dependencies:
============
- [Node](http://nodejs.org/). We always run on the latest version, which is v7.4.0 at the time of this writing, although you will likely have no issues earlier versions.

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
