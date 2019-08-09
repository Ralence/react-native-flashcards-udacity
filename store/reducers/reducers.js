import { combineReducers } from 'redux';
import { ADD_QUESTION, ADD_DECK, DELETE_DECK, LOAD_INITIAL_DATA } from '../actions/actions';
import { INITIAL_STATE } from '../initial_state';

const cardDecksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_INITIAL_DATA:
      if (action.data === null) {
        return {
          ...state,
        };
      } else {
        return {
          ...action.data,
        };
      }
    case ADD_QUESTION:
      const question = action.question;
      const deck = action.deck;

      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: state[deck].questions.concat(question),
        },
      };
    case ADD_DECK:
      const newDeck = action.newDeck;

      return {
        ...state,
        [newDeck.title]: newDeck,
      };
    case DELETE_DECK:
      const newState = {
        ...state,
        [action.id]: undefined,
      };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  decks: cardDecksReducer,
});
