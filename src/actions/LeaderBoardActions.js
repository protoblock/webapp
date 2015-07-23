import http from 'superagent';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import apiUtils from '../api/apiUtils';

function apiRequest(path){
  let request = http.get(apiUtils.getApiUrl() + "/" + encodeURI(path));
  if (typeof window != 'undefined' && window.document){
    request = request.withCredentials()
  }
  return request.accept('application/json');
};

export default {

  loadLeaders(cb) {
    Dispatcher.dispatch({
      type: ActionTypes.GET_LEADERS
    });

    apiRequest("fantasy/leaders")
    .end((err, res) => {
      Dispatcher.dispatch({
        type: ActionTypes.RECEIVE_LEADERS,
        err,
        leaders: res ? res.body : null
      });
      if (cb) {
        cb();
      }
    });
  }

}
