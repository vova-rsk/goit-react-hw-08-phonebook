import { createSelector } from 'reselect';

const getContacts = state =>
  [...state.contacts.items].sort((a, b) => a.name.localeCompare(b.name));

export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
