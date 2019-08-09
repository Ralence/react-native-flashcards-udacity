import {
  loadInitialDataAction,
  addDeckAction,
  deleteDeckAction,
  addQuestionAction,
} from './actions';
import { _loadData, _removeEntry, _submitDeckEntry } from '../../utils/api';

export const loadInitialData = () => dispatch => {
  const data = _loadData();
  return dispatch(loadInitialDataAction(data));
};

export const addDeck = newDeck => dispatch => {
  const key = newDeck.title;
  return _submitDeckEntry(newDeck, key).then(() => dispatch(addDeckAction(newDeck)));
};

export const addQuestion = (deck, question) => dispatch => {
  const newDeck = {
    ...deck,
    questions: deck.questions.concat(question),
  };
  const key = newDeck.title;
  return _submitDeckEntry(newDeck, key).then(() => dispatch(addQuestionAction(key, question)));
};

export const deleteDeck = id => dispatch => {
  return _removeEntry(id).then(() => dispatch(deleteDeckAction(id)));
};
