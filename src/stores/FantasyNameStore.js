import alt from '../alt';
import FantasyNameActions from '../actions/FantasyNameActions';

class FantasyNameStore {
  constructor(){
    this.players = [];
    this.name = '';
    this.balance = '';
    this.errorMessage = null;

    this.bindListeners({
      handleUpdatePlayer: FantasyNameActions.updatePlayer,
      handleGetPlayer: FantasyNameActions.getPlayer,
      handlePlayerFailed: FantasyNameActions.updatePlayerFailed
    });
  }

  handleUpdatePlayer(players) {
    this.players = players.players;
    this.name = players.fantasyName;
    this.balance = players.balance;
    this.errorMessage = null;
  }

  handleGetPlayer() {
    this.players = [];
    this.name = '';
    this.balance = '';
    this.errorMessage = null;
  }

  handlePlayerFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(FantasyNameStore, 'FantasyNameStore');
