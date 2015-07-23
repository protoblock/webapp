import http from 'superagent';
import { canUseDOM } from 'react/lib/ExecutionEnvironment';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes'

const apiUrl = 'http://192.168.2.172:4545';

export default {

  loadTeams(path, cb) {
    Dispatcher.dispatch({
      type: ActionTypes.GET_TEAMS,
      path
    });

    let route = '';
    switch(path){
        case "/":
          route = 'teams';
          break;

        default:
          route = path;
    };

    http.get(apiUrl + "/" + encodeURI(route))
    .withCredentials()
    .accept('application/json')
    .end((err, res) => {
      Dispatcher.dispatch({
        type: ActionTypes.RECEIVE_TEAMS,
        err,
        teams: res ? res.body : null
      });
      if (cb) {
        cb();
      }
    });
  }

}
