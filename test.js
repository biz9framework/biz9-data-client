import series from 'async/series';
import {get_item, update_item, connect } from './';
import {get_test_item,w }  from "/home/think1/www/doqbox/biz9-framework/biz9-utility-client/code";

/* --- TEST CONFIG START --- */
const ID='0';
//const ID='f23c2372-df8e-4c09-a919-677fe32ba0bb';
const APP_TITLE_ID='cool_bean';
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

test('connect', async () => {
               connect(TEST_URL).then((data)=> {
                   console.log("ddone");
                   console.log(data);
                    call();
                    }).catch(error => {
                        //console.log('TEST-BIZ9-DATA-CONNECT-ERROR');
                        //console.log(error);
                    });
          });




