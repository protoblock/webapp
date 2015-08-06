import alt from '../alt';
import api from '../api/query';

class FantasyNameActions {
  updatePlayer(players) {
    this.dispatch(players);
  }

  updatePlayerFailed(error) {
    this.dispatch(error);
  }

  getPlayer(path, id, week) {
    this.dispatch();
    let players = [];
    let name = "";
    let balance = "";

    api.get(path, (err, res) => {
      if (err){
        this.actions.updatePlayerFailed([err]);
      } else {
        this.actions.updatePlayer({
          players: res.body,
          fantasyName: res.body[0].FantasyTeam,
          balance: res.body[0].FantasyBits
        });
      }
    });
  }
}

module.exports = alt.createActions(FantasyNameActions);
