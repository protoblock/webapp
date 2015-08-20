import alt from '../alt';
import api from '../api/query';

class LeaderBoardActions {
  updateLeaders(leaders) {
    this.dispatch(leaders);
  }

  updateLeadersFailed(error) {
    this.dispatch(error);
  }

  getLeaders(query) {
    this.dispatch();
    console.log('bob bob');
    console.log(query);
    api.get('/fantasy/leaders?' + query, (err, res) => {
      if (err){
        this.actions.updateLeadersFailed([err]);
      } else {
        this.actions.updateLeaders(res.body)
      }
    });
  }
}

module.exports = alt.createActions(LeaderBoardActions);