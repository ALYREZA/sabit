export const ENDPOINTS = {
  REGISTER: {
    REGISTER: "api/register",
    SET_PASSWORD: "api/set-password",
  },
  TOKEN: {
    TOKEN: "protocol/openid-connect/token",
  },
  RESET_PASSWORD_BEFORE_LOGIN: {
    RESET_PASSWORD: "api/reset-password",
    FORGET_PASSWORD: "api/forgot-password",
  },
  RESET_PASSWORD_AFTER_LOGIN: {
    BY_TOKEN: "api/account/reset-password/by-token",
    BY_CURRENT_PASSWORD: "api/account/reset-password/by-current-password",
    FORGET_PASSWORD: "api/account/forgot-password",
  },
};
