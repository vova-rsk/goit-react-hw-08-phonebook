import notification from './notification';

const NAME_PATTERN = "^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$";
const EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
const PASSWORD_PATTERN = '^(?=.*?[az])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$';

export const registrationDataCheckingSucces = data => {
  const { name, email, password, verificationPassword } = data;

  if (!name.match(NAME_PATTERN)) {
    notification.warning('Name does not meet the requirements!');
    return false;
  }

  if (!email.match(EMAIL_PATTERN)) {
    notification.warning('Incorrect Email format entered!');
    return false;
  }

  if (!password.match(PASSWORD_PATTERN)) {
    notification.warning('Password value does not meet requirements!');
    return false;
  }

  if (password !== verificationPassword) {
    notification.warning('Password values do not match!');
    return false;
  }
  return true;
};

export const loginDataCheckingSuccess = () => {};
