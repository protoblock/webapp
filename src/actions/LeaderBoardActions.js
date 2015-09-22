import alt from '../alt';
import api from '../api/query';

class LeaderBoardActions {
  updateLeaders(leaders) {
    this.dispatch(leaders);
  }

  updateLeadersFailed(error) {
    this.dispatch(error);
  }

  updateWeek(week) {
    this.dispatch(week);
  }

  updateSeason(season) {
    this.dispatch(season);
  }

  getLeaders(query) {
    this.dispatch();
    api.get('/fantasy/leaders' + query, (err, res) => {
      if (err) {
        this.actions.updateLeadersFailed([err]);
      } else {
        this.actions.updateLeaders(res.body);
      }
    });
  }

  getWeek() {
    this.dispatch();
    api.get('/week', (err, res) => {
      if (err) {
        this.actions.updateWeek('');
      } else {
        this.actions.updateWeek(res.body.week);
      }
    });
  }

  getSeason() {
    this.dispatch();
    api.get('/season', (err, res) => {
      if (err) {
        this.actions.updateSeason('');
      } else {
        this.actions.updateSeason(res.body.season);
      }
    });
  }

}

module.exports = alt.createActions(LeaderBoardActions);
