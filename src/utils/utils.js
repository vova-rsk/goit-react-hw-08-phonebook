import notification from './notification';

const NAME_PATTERN = "^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$";
const EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
const PASSWORD_PATTERN =
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{7,16})';

export const registrationDataCheckingSucces = data => {
  const { name, email, password, verificationPassword } = data;
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

export const duplicateChekingSuccess = (contacts, contact) => {
  return Boolean(contacts.find(({ number }) => number === contact.number));
};
