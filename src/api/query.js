import agent from 'superagent';

// CONFIG ME
const apiURL = "https://trading.football:4545";
//const apiURL = "https://localhost:4545";
// END CONFIG

let queryUtils = {

    get(path, cb){

      let queryString = path.split('?')[1];
      path = path.split('?')[0];

      agent.get(apiURL + path)
      .set('Accept', 'application/json')
      .query(queryString)
      .end(cb);
    }
};

export default queryUtils;
