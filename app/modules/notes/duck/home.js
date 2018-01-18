import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware";
import update from "immutability-helper";
import {
  getNotes,
  updateNoteStartStatus,
  updateNoteFavoriteStatus,
  deleteNoteWithId,
  updateNotes,
  saveNotes
} from "../../../services/noteService";

const initialState = {
  data: [],
  load: {
    loading: false,
    error: "",
    currentPage: 0
  },
  save: {}
};

// Fetch notes
const FETCH_NOTES = "com.notely.FETCH_NOTES";
const DELETE_NOTE = "com.notely.DELETE_NOTE";
const UPDATE_NOTE = "com.notely.UPDATE_NOTE";
const SAVE_NOTE = "com.notely.SAVE_NOTE";
const TOGGLE_STAR = "com.notely.TOGGLE_STAR";
const TOGGLE_FAVORITE = "com.notely.TOGGLE_FAVORITE";

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${FETCH_NOTES}_${PENDING}`:
      return update(state, {
        load: { loading: { $set: true } }
      });
      console.log(action);
      break;
    case `${FETCH_NOTES}_${REJECTED}`:
      return update(state, {
        load: load =>
          update(load, { loading: { $set: false }, error: "I am a error" })
      });
      console.log(action);
      break;
    case `${FETCH_NOTES}_${FULFILLED}`:
      return update(state, {
        load: { loading: { $set: false } },
        data: { $set: action.payload }
      });
    case `${TOGGLE_FAVORITE}_${FULFILLED}`:
      return update(state, {
        data: {
          $apply: data =>
            data.map(item => {
              if (action.payload.id === item.id) {
                let value = !item.favorite;
                const updatedNote = { ...item, favorite: value };
                return updatedNote;
              }
              return item;
            })
        }
      });
    case `${TOGGLE_STAR}_${FULFILLED}`:
      return update(state, {
        data: {
          $apply: data =>
            data.map(item => {
              if (action.payload.id === item.id) {
                let value = !item.starred;
                return { ...item, starred: value };
              }
              return item;
            })
        }
      });
    case `${DELETE_NOTE}_${FULFILLED}`:
      return update(state, {
        data: data => data.filter(item => item.id != action.payload.id)
      });
    case `${UPDATE_NOTE}_${FULFILLED}`:
      return update(state, {
        data: data =>
          data.map(item => {
            if (action.payload.id === item.id) {
              let value = !item.starred;
              return action.payload;
            }
            return item;
          })
      });
    case `${SAVE_NOTE}_${FULFILLED}`:
      return update(state, {
        data: { $push: action.payload }
      });
      break;
    default:
      return state;
  }
}

export const fetchNotes = (favourite, hearted) => {
  return {
    type: FETCH_NOTES,
    payload: getNotes(favourite, hearted).catch(error => {
      return error;
    })
  };
};

export const toggleStar = note => {
  return {
    type: TOGGLE_STAR,
    payload: updateNoteStartStatus(note).catch(error => {
      return error;
    })
  };
};

export const toggleFavorite = note => {
  return {
    type: TOGGLE_FAVORITE,
    payload: updateNoteFavoriteStatus(note).catch(error => {
      return error;
    })
  };
};

export const deleteNote = note => {
  return {
    type: DELETE_NOTE,
    payload: deleteNoteWithId(note).catch(error => {
      return error;
    })
  };
};

export const updateNote = note => {
  return {
    type: UPDATE_NOTE,
    payload: updateNotes(note).catch(error => {
      return error;
    })
  };
};

export const saveNote = note => {
  return {
    type: SAVE_NOTE,
    payload: saveNotes(note).catch(error => {
      return error;
    })
  };
};