import agent from "superagent";

const apiURL = "http://192.96.159.216:4545";
//const apiURL = "http://localhost:4545";
let queryUtils = {

    get(path, cb){

      let queryString = path.split('?')[1];
      path = path.split('?')[0];

      agent.get(apiURL + path)
      .set('Accept', 'application/json')
      .query(queryString)
      .end(cb);
    }
}

export default queryUtils;
