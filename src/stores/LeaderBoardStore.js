import alt from '../alt';
import LeaderBoardActions from '../actions/LeaderBoardActions';

class LeaderBoardStore {
  constructor() {
    this.leaders = [];
    this.errorMessage = null;
    this.sortWeek = 'all weeks';
    this.currentWeek = '';
    this.season = '';
    this.sortPosition = 'all positions';

    this.bindListeners({
      handleUpdateLeaders: LeaderBoardActions.updateLeaders,
      handleGetLeaders: LeaderBoardActions.getLeaders,
      handleLeadersFailed: LeaderBoardActions.updateLeadersFailed,
      handleGetCurrentWeek: LeaderBoardActions.getCurrentWeek,
      handleUpdateCurrentWeek: LeaderBoardActions.updateCurrentWeek,
      handleUpdateSortWeek: LeaderBoardActions.updateSortWeek,
      handleGetSeason: LeaderBoardActions.getSeason,
      handleUpdateSeason: LeaderBoardActions.updateSeason,
      handleUpdateSortPosition: LeaderBoardActions.updateSortPosition
    });
  }

  handleUpdateLeaders(leaders) {
	//console.log('LeaderBoardStore updateLeaders:' + JSON.stringify(leaders));
    console.log('LeaderBoardStore updateLeaders()');
    
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
	console.log('LeaderBoardStore updateSortWeek');
    this.sortWeek = week;
  }

  handleUpdateCurrentWeek(week) {
    this.currentWeek = week;
    if (this.sortWeek === ''){
      this.sortWeek = week;
    }
  }

  handleGetSeason() {
    this.season = '';
  }

  handleUpdateSeason(season) {
    this.season = season;
  }

  handleUpdateSortPosition(position) {
    this.sortPosition = position;
  }
}

module.exports = alt.createStore(LeaderBoardStore, 'LeaderBoardStore');
