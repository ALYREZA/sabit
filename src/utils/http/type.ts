export type RegisterRequestProps = {
  username: string;
  otp?: string;
  login_by_otp_if_user_exists?: boolean;
};

export type RegisterRequestResponse = {
  msisdn: string;
  action: string;
  ttl: number;
  expire_time: string;
};

export type LoginRequestProps = {
  password: string;
  username?: string;
  grant_type?: "refresh_token" | "password";
  scope?: "openid";
};

export type LoginRequestResponse = {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  id_token: string;
  "not-before-policy": number;
  session_state: string;
  scope: string;
  error: string;
  error_description: string;
  error_uri: string;
};
