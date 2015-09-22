import agent from 'superagent';
import Config from '../utils/config';

const apiURL = Config.apiURL;

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
