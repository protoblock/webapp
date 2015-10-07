import alt from '../alt';
import api from '../api/query';

class PlayerActions {
  updatePlayer(players) {
    this.dispatch(players);
  }

  updatePlayerFailed(error) {
    this.dispatch(error);
  }

  getPlayer(path/*, id, week*/) {
    this.dispatch();

    api.get(path, (err, res) => {
      if (err){
        this.actions.updatePlayerFailed([err]);
      } else {
        this.actions.updatePlayer({
          projections: res.body.data,
          name: res.body.data[0].FIRST + ' ' + res.body.data[0].LAST,
          points: res.body.points || 0,
          team: res.body.data[0].TEAM,
          position: res.body.data[0].POS,
          week: res.body.data[0].WEEK
        });
      }
    });
  }
}

module.exports = alt.createActions(PlayerActions);
