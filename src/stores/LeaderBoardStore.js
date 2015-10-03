import alt from '../alt';
import LeaderBoardActions from '../actions/LeaderBoardActions';

class LeaderBoardStore {
  constructor() {
    this.leaders = [];
    this.errorMessage = null;
    this.week = '';
    this.currentWeek = '';
    this.season = '';

    this.bindListeners({
      handleUpdateLeaders: LeaderBoardActions.updateLeaders,
      handleGetLeaders: LeaderBoardActions.getLeaders,
      handleLeadersFailed: LeaderBoardActions.updateLeadersFailed,
      handleGetCurrentWeekWeek: LeaderBoardActions.getCurrentWeek,
      handleUpdateCurrentWeek: LeaderBoardActions.updateCurrentWeek,
      handleUpdateSortWeek: LeaderBoardActions.updatSortWeek,
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

  handleGetCurrentWeek() {
    this.week = '';
  }

  handleUpdateSortWeek(week) {
    this.sortWeek = week;
  }

  handleUpdateCurrentWeek(week) {
    this.currentWeek = week;
    if (this.sortWeek == ''){
      this.sortWeek = week;
    }
  }

  handleGetSeason() {
    this.season = '';
  }

  handleUpdateSeason(season) {
    this.season = season;
  }
}

module.exports = alt.createStore(LeaderBoardStore, 'LeaderBoardStore');
