import axios from 'axios';

const connect_adapter = (url,obj) => {
    return new Promise((callback) => {
        axios.get(url, {
            params: obj
        })
            .then(function (response) {
                callback(response);
            })
            .catch(function (error) {
                console.log('biz9-apdater-client-connect');
                console.log(error);
                callback(error);
            });
    });
}
const get_item_adapter = (url) => {
    return new Promise((callback) => {
        axios.get(url, {
            params: {}
        })
            .then(function (response) {
                callback([response.data.cloud_error,response.data.cloud_data]);
            })
            .catch(function (error) {
                console.log('biz9-apdater-client-get');
                console.log(error);
                callback(error);
            });
    });
}
const update_item_adapter = (url,obj) => {
    return new Promise((callback) => {
        axios.post(url, {
            params: obj
        })
            .then(function (response) {
                callback([response.data.cloud_error,response.data.cloud_data]);
            })
            .catch(function (error) {
                console.log('biz9-apdater-client-update');
                console.log(error);
                callback(error);
            });
    });
}

export {
    connect_adapter,
    get_item_adapter,
    update_item_adapter
}
