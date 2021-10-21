import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const settings = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const warning = text => {
  toast.error(text, settings);
};

const success = text => {
  toast.success(text, settings);
};

const signUpSuccess = name => {
  notification.success(
    `The user has been successfully created. Welcome, ${name}!`,
  );
};

const signUpError = errorCode => {
  if (errorCode === 400) {
    notification.warning('An account with the specified mail already exists.!');
  }

  if (errorCode === 500) {
    notification.warning('There was a problem creating a user. Try again!');
  }
};

const logInSuccess = name => {
  notification.success(`Welcome, ${name}!`);
};

const logInError = errorCode => {
  if (errorCode === 400) {
    notification.warning('Wrong login or password');
  }
};

const logOutError = errorCode => {
  if (errorCode === 500) {
    notification.warning('Logout error, please try again');
  }
};

const notification = {
  warning,
  success,
  signUpSuccess,
  logInSuccess,
  signUpError,
  logInError,
  logOutError,
};

export default notification;
