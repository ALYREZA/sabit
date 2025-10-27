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
  id: string;
  username: string;
  firstName: string;
  fatherName: string;
  birthDate: string;
  nationalCode: string;
  lastName: string;
  mobile: string;
  accessToken: string;
  refreshToken: string;
  balance: number;
  authorized: boolean;
  refreshExpiresAt: number;
  expiresAt: number;
  defaultUnits: any[];
};

export interface SearchRequestProps {
  t: string;
  newResource?: boolean;
  digitalResource?: boolean;
  resourceInformation?: boolean;
  sortkey?: string;
}
export interface SearchRequestResponse {
  totalResult: number;
  biblioList: BiblioList[];
}

export interface BiblioList {
  id: number;
  docNumber: string;
  title: string;
  materialType: string;
  mainEntry: string;
  LCClass: any;
  DEClass: any;
  NLMClass: any;
  publisherName: string;
  publishDate: string;
  ISXNfixed: any;
  databankId: number;
  gmdText: any;
  hasHolding: boolean;
  hasAttachment: boolean;
  mainSubject: string;
  resourceInformation: any;
  imgAddress: string;
  unitId: string;
  unitName: string;
  rate: any;
}
