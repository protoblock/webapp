import alt from '../alt';
import PlayerActions from '../actions/PlayerActions';

class PlayerStore {
  constructor(){
    this.projections = [];
    this.name = '';
    this.points = '';
    this.team = '';
    this.position = '';
    this.week = '';
    this.errorMessage = null;

    this.bindListeners({
      handleUpdatePlayer: PlayerActions.updatePlayer,
      handleGetPlayer: PlayerActions.getPlayer,
      handlePlayerFailed: PlayerActions.updatePlayerFailed
    });
  }

  handleUpdatePlayer(data) {
    this.projections = data.projections;
    this.name = data.name;
    this.points = data.points;
    this.team = data.team;
    this.position = data.position;
    this.week = data.week;
    this.errorMessage = null;
  }

  handleGetPlayer() {
    this.projections = [];
    this.name = '';
    this.points = '';
    this.team = '';
    this.position = '';
    this.week = '';
    this.errorMessage = null;
  }

  handlePlayerFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(PlayerStore, 'PlayerStore');
