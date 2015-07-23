import EventEmitter from 'eventemitter3';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

const CHANGE_EVENT = 'change';

var teams = {};

var TeamStore = Object.assign({}, EventEmitter.prototype, {
    /**
     * Get a list of all NFL teams
     *
     * @returns {Array} Array of Team objects
     */
    getTeams() {

      return teams ? teams : [];
    },

    /**
     * Emit change event
     *
     * @returns {Boolean} Indication we've emmitted
     */
    emitChange() {
      return this.emit(CHANGE_EVENT);
    },

    /**
     * Register new event listener
     *
     * @param {function} callback Callback function
     */
    onChange(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    /**
     * Remove event listener
     *
     * @param {function} callback Callback function
     */
     off(callback) {
       this.removeListener(CHANGE_EVENT, callback);
     }
});

TeamStore.dispatchToken = Dispatcher.register((action) => {

  switch (action.type) {

    case ActionTypes.GET_TEAMS:
      TeamStore.emitChange();
      break;

    case ActionTypes.RECEIVE_TEAMS:
      if (!action.err) {
        teams = action.teams;
      }
      TeamStore.emitChange();
      break;

    default:
  }

});

export default TeamStore;
