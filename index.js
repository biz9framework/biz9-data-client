import { connect_adapter,get_item_adapter,update_item_adapter } from './adapter.js';

const connect = async (url) => {
    const data = await connect_adapter(url);
    return data;
};
const get_item = async (url,obj) => {
    const [error,data] = await get_item_adapter(url,obj);
    return [error,data];
};
const update_item = async (url,obj) => {
    const [error,data] = await update_item_adapter(url,obj);
    return [error,data];
};

export {
    connect,
    get_item,
    update_item
}

