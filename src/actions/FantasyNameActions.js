import alt from '../alt';
import api from '../api/query';

class FantasyNameActions {
  updatePlayer(players) {
    this.dispatch(players);
  }

  updatePlayerFailed(error) {
    this.dispatch(error);
  }

  updateSortWeek(week) {
    this.dispatch(week);
  }

  updateSortPosition(week){
    this.dispatch(week);
  }

  updateCurrentWeek(week){
    this.dispatch(week);
  }

  getPlayer(path, query) {
    this.dispatch();

    api.get(path + query, (err, res) => {
      if (err){
        this.actions.updatePlayerFailed([err]);
      } else {
        this.actions.updatePlayer({
          players: res.body.data,
          fantasyName: res.body.data[0].FANTASYNAME,
          balance: res.body.balance || 0
        });
      }
    });
  }

  getCurrentWeek() {
    this.dispatch();
    api.get('/week', (err, res) => {
      if (err) {
        this.actions.updateCurrentWeek('');
      } else {
        this.actions.updateCurrentWeek(res.body.week);
      }
    });
  }
}

module.exports = alt.createActions(FantasyNameActions);
