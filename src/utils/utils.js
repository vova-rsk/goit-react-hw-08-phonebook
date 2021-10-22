import notification from './notification';
import { store } from '../redux/store';

const NAME_PATTERN = "^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$";
const EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
const PASSWORD_PATTERN =
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{7,16})';
const PHONE_NUMBER_PATTERN = '^[0-9]{3,15}$';

export const registrationDataValidationSucces = userData => {
  const { name, email, password, verificationPassword } = userData;
  const nameRegex = new RegExp(NAME_PATTERN);
  const emailRegex = new RegExp(EMAIL_PATTERN);
  const passwordRegex = new RegExp(PASSWORD_PATTERN);

  if (!nameRegex.test(name)) {
    notification.warning('Name does not meet the requirements!');
    return false;
  }

  if (!emailRegex.test(email)) {
    notification.warning('Incorrect Email format entered!');
    return false;
  }

  if (!passwordRegex.test(password)) {
    notification.warning('Password value does not meet requirements!');
    return false;
  }

  if (password !== verificationPassword) {
    notification.warning('Password values do not match!');
    return false;
  }
  return true;
};

export const contactDataValidationSuccess = contactData => {
  const { number } = contactData;
  const numberRegex = new RegExp(PHONE_NUMBER_PATTERN);

  if (!numberRegex.test(number)) {
    notification.warning('Incorrect number format entered!');
    return false;
  }
  return true;
};

export const duplicateChekingSuccess = (contact, action = {}) => {
  const { contacts } = store.getState();
  let isDuplicate = false;

  switch (action.type) {
    case 'add':
      isDuplicate = Boolean(
        contacts.items.find(({ number }) => number === contact.number),
      );
      if (isDuplicate) notification.duplicationSuccess();
      return isDuplicate;
    case 'edit':
      isDuplicate = Boolean(
        contacts.items
          .filter(({ id }) => id !== contact.id)
          .find(({ number }) => number === contact.number),
      );
      if (isDuplicate) notification.duplicationSuccess();
      return isDuplicate;
    default:
      notification.warning('something went wrong');
  }
};
