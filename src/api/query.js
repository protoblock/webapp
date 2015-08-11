import request from "superagent";

const apiURL = "http://192.96.159.216:4545";

let queryUtils = {

    get(path, cb){
      request
        .get(apiURL + path)
        .set('Accept', 'application/json')
        .end(cb);
    }
}

export default queryUtils;
