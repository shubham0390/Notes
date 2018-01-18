import Notes from "../modules/notes/fixtures/notes";

let NOTE_ID = 2000;

export const updateNoteFavoriteStatus = note => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        resolve(note);
      }, 500);
    },
  );
};

export const updateNoteHeartStatus = note => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        resolve(note);
      }, 500);
    },
  );
};

export const deleteNoteWithId = note => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        resolve(note);
      }, 500);
    },
  );
};

export const updateNotes = note => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        resolve(note);
      }, 500);
    },
  );
};

export const getNotes = (favourite, hearted) => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        let notes;
        notes = Notes.slice(0, 4);

        if (!favourite && !hearted) {
          resolve(notes);
          return;
        }
        if (favourite && hearted) {
        notes = notes.filter(note => {
            if(note.favorite && note.hearted)
              return note;
          })
          resolve(notes)
        }
        notes = notes.filter(note => {
          if(favourite && note.favorite){
            return note;
          }
          if(hearted && note.hearted){
            return note;
          }
        });
        resolve(notes);
      }, 2000);
    },
  );
};

export const saveNotes = note => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        NOTE_ID += 1;
        const updateNote = { ...note, id: NOTE_ID };
        resolve(updateNote);
      }, 500);
    },
  );
};
