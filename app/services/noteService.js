import Notes from "../modules/notes/fixtures/notes";

let NOTE_ID = 2000;

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

export const updateNoteHeartStatus = note => {
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
  console.log("From Service", "favourite", favourite, "hearted", hearted);
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
    reject => {}
  );
};

export const saveNotes = note => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        NOTE_ID = NOTE_ID + 1;
        let updateNote = { ...note, id: NOTE_ID };
        resolve(updateNote);
      }, 500);
    },
    reject => {}
  );
};
