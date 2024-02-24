import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: initialContacts,
    filter: '',
  },
  reducers: {
    add: {
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
      prepare: form => {
        return {
          payload: {
            ...form,
            id: nanoid(),
          },
        };
      },
    },
    delete: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { actions } = contactsSlice;
export default contactsSlice.reducer;
