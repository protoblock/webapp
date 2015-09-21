import alt from '../alt';
import LeaderBoardActions from '../actions/LeaderBoardActions';

class LeaderBoardStore {
  constructor() {
    this.leaders = [];
    this.errorMessage = null;
    this.week = '';
    this.season = '';

    this.bindListeners({
      handleUpdateLeaders: LeaderBoardActions.updateLeaders,
      handleGetLeaders: LeaderBoardActions.getLeaders,
      handleLeadersFailed: LeaderBoardActions.updateLeadersFailed,
      handleGetWeek: LeaderBoardActions.getWeek,
      handleUpdateWeek: LeaderBoardActions.updateWeek,
      handleGetSeason: LeaderBoardActions.getSeason,
      handleUpdateSeason: LeaderBoardActions.updateSeason
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

  handleGetWeek() {
    this.week = '';
  }

  handleUpdateWeek(week) {
    this.week = week;
  }

  handleGetSeason() {
    this.season = '';
  }

  handleUpdateSeason(season) {
    this.season = season;
  }
}

module.exports = alt.createStore(LeaderBoardStore, 'LeaderBoardStore');
