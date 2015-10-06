import alt from '../alt';
import FantasyNameActions from '../actions/FantasyNameActions';

class FantasyNameStore {
  constructor(){
    this.players = [];
    this.name = '';
    this.balance = '';
    this.errorMessage = null;
    this.currentWeek = '';
    this.sortWeek = 'any week';
    this.sortPosition = 'any position';

    this.bindListeners({
      handleUpdatePlayer: FantasyNameActions.updatePlayer,
      handleGetPlayer: FantasyNameActions.getPlayer,
      handlePlayerFailed: FantasyNameActions.updatePlayerFailed,
      handleGetCurrentWeek: FantasyNameActions.updateCurrentWeek,
      handleUpdateSortWeek: FantasyNameActions.updateSortWeek,
      handleUpdateSortPosition: FantasyNameActions.updateSortPosition
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

  handleGetCurrentWeek(week) {
    this.currentWeek = week;
  }

  handleUpdateSortWeek(week) {
    this.sortWeek = week;
  }

  handleUpdateSortPosition(position) {
    this.sortPosition = position;
  }
}

export default alt.createStore(FantasyNameStore, 'FantasyNameStore');
