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

export const loginRequest = async ({
  username,
  password,
  grant_type = "password",
  scope = "openid",
}: LoginRequestProps) => {
  console.log("Login request params:", {
    username,
    password,
    grant_type,
    scope,
  });

  // Create URL-encoded form data
  const formData = new URLSearchParams();
  formData.append("username", username!);
  formData.append("password", password);
  formData.append("grant_type", grant_type);
  formData.append("scope", scope);

  return await authApi
    .post(ENDPOINTS.TOKEN.TOKEN, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    })
    .json<LoginRequestResponse>();
};
