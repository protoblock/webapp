import alt from '../alt';
import api from '../api/query';

class FantasyNameActions {
  updatePlayer(players) {
    this.dispatch(players);
  }

  updatePlayerFailed(error) {
    this.dispatch(error);
  }

  getPlayer(path/*, id, week*/) {
    this.dispatch();
    //let players = [];
    //let name = '';
    //let balance = '';

    api.get(path, (err, res) => {
      if (err){
        this.actions.updatePlayerFailed([err]);
      } else {
        this.actions.updatePlayer({
          players: res.body.data,
          fantasyName: res.body.data[0].FANTASYNAME,
          balance: res.body.balance
        });
      }
    });
  }
}

module.exports = alt.createActions(FantasyNameActions);
