import agent from 'superagent';

const apiURL = "https://trading.football:4545";
//const apiURL = "https://localhost:4545";
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
