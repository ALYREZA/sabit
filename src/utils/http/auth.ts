import { authApi } from "../Api";
import { ENDPOINTS } from "../Endpoints";
import {
  LoginRequestProps,
  LoginRequestResponse,
  RegisterRequestProps,
  RegisterRequestResponse,
} from "./type";

export const registerRequest = async ({
  username,
  otp = "",
  login_by_otp_if_user_exists = false,
}: RegisterRequestProps) => {
  return await authApi
    .post(ENDPOINTS.REGISTER.REGISTER, {
      json: {
        username,
        otp,
        login_by_otp_if_user_exists,
      },
    })
    .json<RegisterRequestResponse>();
};

export const loginRequest = async (searchParams: LoginRequestProps) => {
  return await authApi
    .post(ENDPOINTS.TOKEN.TOKEN, { searchParams })
    .json<LoginRequestResponse>();
};
