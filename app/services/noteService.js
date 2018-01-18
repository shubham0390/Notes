import Notes from "../modules/notes/fixtures/notes";
import { updatedNote } from "../modules/notes/duck/home";

let NOTE_ID = 2000;

export const updateNoteStartStatus = note => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        resolve(note);
      }, 500);
    },
    reject => {}
  );
};

export const updateNoteFavoriteStatus = note => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        resolve(note);
      }, 500);
    },
    reject => {}
  );
};

export const deleteNoteWithId = note => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        resolve(note);
      }, 500);
    },
    reject => {}
  );
};

export const updateNotes = note => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        resolve(note);
      }, 500);
    },
    reject => {}
  );
};

export const getNotes = (favourite, hearted) => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        let notes;
        notes = Notes.slice(0, 4);
        if (favourite || hearted) {
          notes = notes.filter(note => {
            let isValid = true;
            if (!favourite) {
              isValid = isValid || true;
            } else if (favourite && note.favorite) {
              isValid = true;
            } else {
              isValid = false;
            }
            if (!hearted) {
              isValid = isValid || true;
            } else if (hearted && note.hearted) {
              isValid = isValid || true;
            } else {
              isValid = isValid || true;
            }
            if (isValid) {
              return note;
            }
          });
        } else {
          notes = Notes.slice(0, 4);
        }
        resolve(notes);
      }, 2000);
    },
    reject => {}
  );
};

export const saveNotes = note => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        NOTE_ID = NOTE_ID + 1;
        let updateNote = { ...note, id: NOTE_ID };
        resolve(updatedNote);
      }, 500);
    },
    reject => {}
  );
};
