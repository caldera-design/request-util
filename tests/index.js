
import { getRequest, postRequest } from '../src/LibraryEntryPoint';

describe('Test `getRequest` function', () => {

    let response = null;

    beforeEach((done) => {
        getRequest({ url: 'http://httpbin.org/get' })
            .then(res => {
                response = res;
            })
            .finally(() => {
                done();
            });
    });

    it('should get an empty, but non-null response.', () => {
        expect(response).not.toBe(null);
    });
});

describe('The `getRequest` function', () => {

    let headers = null;

    beforeEach((done) => {
        getRequest({
                url: 'http://httpbin.org/headers',
                headers: { 'X-TEST': '1234' }
            })
            .then(res => res.json())
            .then(res => {
                headers = res.headers;
            })
            .finally(() => {
                done();
            });
    });

    it('should get the same headers.', () => {
        expect(headers['X-Test']).toBe('1234');
    });
});

describe('The `postRequest` function', () => {

    let itWorked = false;

    beforeEach((done) => {
        postRequest({ url: 'http://httpbin.org/post' })
            .then(res => res.json())
            .then(res => {
                itWorked = true;
            })
            .finally(() => {
                done();
            });
    });

    it('should get the same headers.', () => {
        expect(itWorked).toBe(true);
    });
});

describe('The `getRequest` function', () => {

    let itWorked = false;

    beforeEach((done) => {
        getRequest({ url: 'http://httpbin.org/post' })
            .then(res => {
                itWorked = res.status === 405;
            })
            .finally(() => {
                done();
            });
    });

    it('should get a 405 from the /post endpoint.', () => {
        expect(itWorked).toBe(true);
    });
});
