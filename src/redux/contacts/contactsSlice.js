import { createSlice, nanoid } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContacts: {
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
      reducer: (state, { payload }) => {
        const isContactExist = state.contacts.find(
          contact => contact.name.toLowerCase() === payload.name.toLowerCase()
        );
        if (isContactExist) {
          alert(`${payload.name} has been already added`);
          return;
        }
        state.contacts.push(payload);
      },
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  selectors: {
    selectContacts: state => state.contacts,
    selectFilter: state=>state.filter

  }
});

export const contactsReducer = slice.reducer;
export const { addContacts, deleteContacts, changeFilter } = slice.actions;
export const { selectContacts,selectFilter } = slice.selectors;
