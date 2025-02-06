import series from 'async/series';
import assert  from 'assert';
import {get_item, update_item, delete_item, connect, get_data, post_data } from './';
import {get_test_item,w }  from "/home/think1/www/doqbox/biz9-framework/biz9-utility-client/code";
import {get_cloud_url }  from "/home/think1/www/doqbox/biz9-framework/biz9-adapter-client/code";

/* --- TEST CONFIG START --- */
//const ID='0';
const ID='e91e3d97-87fe-4ca5-a700-59639c498631';
const APP_TITLE_ID='feb6d';
const DATA_TYPE='dt_blank';
const PORT_ID="1901";
const TEST_URL="https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json";
const CLOUD_URL="http://localhost:"+PORT_ID;
/* --- TEST CONFIG END --- */
/* --- TEST DATA CONFIG START --- */
const biz9_config ={
    SERVICE_HOST_TYPE:'multiple',
    APP_TITLE_ID:APP_TITLE_ID,
    MONGO_IP:'0.0.0.0',
    MONGO_USERNAME_PASSWORD:'',
    MONGO_PORT_ID:"27019",
    MONGO_SERVER_USER:'admin',
    MONGO_CONFIG_FILE_PATH:'/etc/mongod.conf',
    SSH_KEY:"",
    REDIS_URL:"0.0.0.0",
    REDIS_PORT_ID:"27019"
};
/* --- TEST DATA CONFIG END --- */
/* availble
 * connect
 * update_item
 * get_item
 * delete_item
 */

test('connect', async () => {
    console.log('TEST-BIZ9-DATA-CLIENT-CONNECT-START');
    let cloud_url = get_cloud_url(biz9_config.APP_TITLE_ID,CLOUD_URL,'/main/test/connect/');
    let item_test = get_test_item(DATA_TYPE,ID);
    let data = await connect(cloud_url,item_test);
    assert.notStrictEqual(data, null);
    w('data',data);
    w('cloud_url',cloud_url);
    console.log('TEST-BIZ9-DATA-CLIENT-CONNECT-SUCCESS');
});
test('item_update', async () => {
    console.log('TEST-BIZ9-DATA-CLIENT-UPDATE-ITEM-START');
    let cloud_url = get_cloud_url(biz9_config.APP_TITLE_ID,CLOUD_URL,'/main/crud/update/'+DATA_TYPE+"/"+ID);
    let item_test = get_test_item(DATA_TYPE,ID);
    w('cloud_url',cloud_url);
    w('item_test',item_test);
    const [error,data] = await update_item(cloud_url,item_test);
    w('data',data);
    assert.strictEqual(item_test.first_name,data.item.first_name);
    assert.strictEqual(item_test.title,data.item.title);
    console.log('TEST-BIZ9-DATA-CLIENT-UPDATE-ITEM-SUCCESS');
});
test('item_get', async () => {
    console.log('TEST-BIZ9-DATA-CLIENT-GET-ITEM-START');
    let cloud_url = get_cloud_url(biz9_config.APP_TITLE_ID,CLOUD_URL,'/main/crud/get/'+DATA_TYPE+"/"+ID);
    const [error,data] = await get_item(cloud_url);
    w('data',data);
    w('cloud_url',cloud_url);
    assert.notStrictEqual(data.item.source,'NOT-FOUND');
    console.log('TEST-BIZ9-DATA-CLIENT-GET-ITEM-SUCCESS');
});
test('item_delete', async () => {
    console.log('TEST-BIZ9-DATA-CLIENT-DELETE-ITEM-START');
    let cloud_url = get_cloud_url(biz9_config.APP_TITLE_ID,CLOUD_URL,'/main/crud/delete/'+DATA_TYPE+"/"+ID);
    const [error,data] = await delete_item(cloud_url);
    w('data',data);
    w('cloud_url',cloud_url);
    assert.strictEqual(data.first_name,undefined);

    console.log('TEST-BIZ9-DATA-CLIENT-DELETE-ITEM-SUCCESS');
});
test('get_data', async () => {
    console.log('TEST-BIZ9-DATA-CLIENT-GET-DATA-START');
    let cloud_url = get_cloud_url(biz9_config.APP_TITLE_ID,CLOUD_URL,'/main/test/ping');
    let item_test = get_test_item(DATA_TYPE,ID);
    w('cloud_url',cloud_url);
    w('item_test',item_test);
    const [error,data] = await get_data(cloud_url,item_test);
    w('data',data);
    console.log('TEST-BIZ9-DATA-CLIENT-GET-DATA-SUCCESS');
});
test('post_data', async () => {
    console.log('TEST-BIZ9-DATA-CLIENT-POST-DATA-START');
    let cloud_url = get_cloud_url(biz9_config.APP_TITLE_ID,CLOUD_URL,'main/test/post');
    let item_test = get_test_item(DATA_TYPE,ID);
    w('cloud_url',cloud_url);
    w('item_test',item_test);
    const [error,data] = await get_data(cloud_url,item_test);
    w('data',data);
    console.log('TEST-BIZ9-DATA-CLIENT-POST-DATA-SUCCESS');
});

