import { createSelector } from 'reselect';
import getFilter from '../filter/filter-selectors';

const getContacts = state =>
  [...state.contacts.items].sort((a, b) => a.name.localeCompare(b.name));

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
