import alt from '../alt';
import LeaderBoardActions from '../actions/LeaderBoardActions';

class LeaderBoardStore {
  constructor() {
    this.leaders = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateLeaders: LeaderBoardActions.updateLeaders,
      handleGetLeaders: LeaderBoardActions.getLeaders,
      handleLeadersFailed: LeaderBoardActions.updateLeadersFailed
    });
  }

  handleUpdateLeaders(leaders) {
    this.leaders = leaders;
    this.errorMessage = null;
  }

  handleGetLeaders() {
    this.locations = [];
  }

  handleLeadersFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

module.exports = alt.createStore(LeaderBoardStore, 'LeaderBoardStore');
