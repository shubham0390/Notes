import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware";
import update from "immutability-helper";
import {
  getNotes,
  updateNoteFavoriteStatus,
  updateNoteHeartStatus,
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
  save: {
    state: "",
    error: ""
  }
};

// Fetch notes
const FETCH_NOTES = "com.notely.FETCH_NOTES";
const DELETE_NOTE = "com.notely.DELETE_NOTE";
const UPDATE_NOTE = "com.notely.UPDATE_NOTE";
const SAVE_NOTE = "com.notely.SAVE_NOTE";
const TOGGLE_FAVORITE = "com.notely.TOGGLE_FAVORITE";
const TOGGLE_HEART = "com.notely.TOGGLE_HEART";

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${FETCH_NOTES}_${PENDING}`:
      return update(state, { load: { loading: { $set: true } } });
    case `${FETCH_NOTES}_${REJECTED}`:
      return update(state, {
        load: load =>
          update(load, { loading: { $set: false }, error: "I am a error" })
      });
    case `${FETCH_NOTES}_${FULFILLED}`:
      return update(state, {
        load: { loading: { $set: false } },
        data: { $set: action.payload }
      });
    case `${TOGGLE_HEART}_${FULFILLED}`:
      return update(state, {
        data: {
          $apply: data =>
            data.map(item => {
              if (action.payload.id === item.id) {
                const value = !item.hearted;
                const updatedNote = { ...item, hearted: value };
                return updatedNote;
              }
              return item;
            })
        }
      });
    case `${TOGGLE_FAVORITE}_${FULFILLED}`:
      return update(state, {
        data: {
          $apply: data =>
            data.map(item => {
              if (action.payload.id === item.id) {
                const value = !item.favorite;
                return { ...item, favorite: value };
              }
              return item;
            })
        }
      });
    case `${DELETE_NOTE}_${FULFILLED}`:
      return update(state, {
        data: data => data.filter(item => item.id !== action.payload.id)
      });
    case `${UPDATE_NOTE}_${FULFILLED}`:
      return update(state, {
        data: data =>
          data.map(item => {
            if (action.payload.id === item.id) {
              return action.payload;
            }
            return item;
          }),
        save: { state: { $set: "SUCCESSFUll" } }
      });
    case `${UPDATE_NOTE}_${PENDING}`:
      return update(state, { save: { state: { $set: "PENDING" } } });
    case `${UPDATE_NOTE}_${REJECTED}`:
      return update(state, {
        save: {
          state: { $set: "FAILED" },
          error: { $set: "I am a error" }
        }
      });
    case `${SAVE_NOTE}_${FULFILLED}`:
      return update(state, {
        data: { $push: [action.payload] },
        save: { state: { $set: "SUCCESSFUll" } }
      });
    case `${SAVE_NOTE}_${PENDING}`:
      return update(state, { save: { state: { $set: "PENDING" } } });
    case `${SAVE_NOTE}_${REJECTED}`:
      return update(state, {
        save: {
          state: { $set: "FAILED" },
          error: { $set: "I am a error" }
        }
      });
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

export const toggleFavorite = note => {
  return {
    type: TOGGLE_FAVORITE,
    payload: updateNoteFavoriteStatus(note).catch(error => {
      return error;
    })
  };
};

export const toggleHeart = note => {
  return {
    type: TOGGLE_HEART,
    payload: updateNoteHeartStatus(note).catch(error => {
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
