import { authApi } from "../Api";
import { ENDPOINTS } from "../Endpoints";
import {
  LoginRequestProps,
  LoginRequestResponse,
  RegisterRequestProps,
  RegisterRequestResponse,
} from "./type";

export const registerRequest = async (searchParams: RegisterRequestProps) => {
  return await authApi
    .post(ENDPOINTS.REGISTER.REGISTER, { searchParams })
    .json<RegisterRequestResponse>();
};

export const loginRequest = async (searchParams: LoginRequestProps) => {
  return await authApi
    .post(ENDPOINTS.TOKEN.TOKEN, { searchParams })
    .json<LoginRequestResponse>();
};
