var urljoin = require('url-join');

export default class BaseApi {
    constructor() {
        this.baseUrl = process.env.REACT_APP_API_URL;
        console.log(this.baseUrl);
    }

    makeUrl = (...args) => {
        var path = urljoin(args);
        return urljoin(this.baseUrl, path);
    };
    call = async (url, method, model, noAuth) => {
        var access_token = undefined;
        try {
            var strToken = localStorage.getItem("token");
            var token = JSON.parse(strToken);
            if (token && token.access_token) access_token = token.access_token;
            else access_token = null;

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token,
            };
            if (noAuth) {
                headers.Authorization = undefined
            }
            let request = {
                method: method,
                headers: headers,
            };
            if (method === 'POST' || method === "PUT") {
                // console.log(JSON.stringify(model, null, 4))
                request.body = JSON.stringify(model)
            }
            if (method === 'DELETE') {
                request.ids = model
            }
            let response = await fetch(url, request);
            if (!response.ok) {
                if (response.status === 401) {
                    localStorage.removeItem('token');
                }
            }
            let responseJson = await response.json();
            //console.log(responseJson);
            return responseJson;
        } catch (e) {
            console.log(e);
            throw e;
        }
    };
    get = async (url) => {
        return await this.call(url, "GET");
    };
    post = async (url, model) => {
        return await this.call(url, "POST", model);
    };
    postWithoutToken = async (url, model) => {
        return await this.call(url, "POST", model, true);
    };
    put = async (url, model) => {
        return await this.call(url, "PUT", model);
    };
    delete = async (url, model) => {
        //console.log(ids);
        return await this.call(url, "DELETE", model);
    };

    getToken = () => {
        var token = localStorage.getItem('token');
        if (token === undefined)
            window.location.href = '/login.html';
        return JSON.parse(token);
    };
}
