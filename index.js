const { connect_adapter,get_item_adapter,update_item_adapter,delete_item_adapter,get_data_adapter,update_data_adapter } = require('./adapter.js');

const connect = async (url,obj) => {
    const data = await connect_adapter(url,obj);
    return data;
};
const get_item = async (url) => {
    const [error,data] = await get_item_adapter(url);
    return [error,data];
};
const update_item = async (url,obj) => {
    const [error,data] = await update_item_adapter(url,obj);
    return [error,data];
};
const delete_item = async (url) => {
    const [error,data] = await delete_item_adapter(url);
    return [error,data];
};
const get_data = async (url,obj) => {
    const [error,data] = await get_data_adapter(url,obj);
    return [error,data];
};
const update_data = async (url,obj) => {
    const [error,data] = await update_data_adapter(url,obj);
    return [error,data];
};

module.exports = {
    connect,
    get_item,
    get_data,
    update_data,
    delete_item,
    update_item
}
