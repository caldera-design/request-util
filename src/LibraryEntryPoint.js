
import {
    getRequest,
    postRequest,
    deleteRequest,
    request } from './RequestUtil';

// Note: a bug in `react-hot-loader` causes us to need to use `module.exports`
// here.
// see https://github.com/gaearon/react-hot-loader/issues/158
module.exports = {
    getRequest,
    postRequest,
    deleteRequest,
    request
};
