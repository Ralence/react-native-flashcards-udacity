import { _loadData, _removeEntry, _submitEntry } from "../../utils/api";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_DECK = "ADD_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const LOAD_INITIAL_DATA = "LOAD_INITIAL_DATA";

export const loadInitialDataAction = (data) => ({
    type: LOAD_INITIAL_DATA,
    data
})

export const addQuestionAction = (deck, question) => ({
    type: ADD_QUESTION,
    deck,
    question
});

export const addDeckAction = (newDeck) => ({
    type: ADD_DECK,
    newDeck
});

export const deleteDeckAction = id => ({
    type: DELETE_DECK,
    id
});

