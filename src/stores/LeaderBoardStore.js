import EventEmitter from 'eventemitter3';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
const CHANGE_EVENT = 'change';

let leaders;

var LeaderBoardStore = Object.assign({}, EventEmitter.prototype, {
    /**
     * Get a list of Leaders
     *
     * @returns {Array} Array of player objects
     */
    getLeaders() {

      return leaders ? leaders : [];
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

LeaderBoardStore.dispatchToken = Dispatcher.register((action) => {

  switch (action.type) {

    case ActionTypes.GET_LEADERS:
      LeaderBoardStore.emitChange();
      break;

    case ActionTypes.RECEIVE_LEADERS:
      if (!action.err) {
        leaders = action.leaders;
      }
      LeaderBoardStore.emitChange();
      break;

    default:
  }

});

export default LeaderBoardStore;
