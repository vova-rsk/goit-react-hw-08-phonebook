export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getAuthStatus = state => state.auth.isLoggedIn;
export const getLoadingStatus = state => state.auth.isLoading;
