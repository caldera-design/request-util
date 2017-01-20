
import fetch from 'isomorphic-fetch';
import qs from 'querystring';
import extend from 'lodash/extend';
import Promise from 'bluebird';

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export function getRequest({ ...rest }) {
    return request({ method: 'GET', ...rest });
}

export function postRequest({ ...rest }) {
    return request({ method: 'POST', ...rest });
}

export function putRequest({ ...rest }) {
    return request({ method: 'PUT', ...rest });
}

export function deleteRequest({ ...rest }) {
    return request({ method: 'DELETE', ...rest });
}

export function request({ url, method, body, query, headers = {}, credentials = 'include' }) {
    const options = extend({
        method: method,
        headers: {
            ...defaultHeaders,
            ...headers
        },
        credentials
    }, body && {
        body: JSON.stringify(body)
    });
    return Promise.resolve()
        .then(() => fetch(url + createQueryString(query), options));
}

function createQueryString(query) {
    return query ? `?${qs.stringify(query)}` : '';
}
