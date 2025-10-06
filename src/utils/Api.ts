import ky, { HTTPError } from "ky";

// Create configured ky instance
const rawPrefixUrl = process.env.EXPO_PUBLIC_API_URL as string;
const authServerUrl = process.env.EXPO_PUBLIC_AUTHENTICATION_SERVER as string;
export const authorization = "Basic ".concat(
  btoa(
    process.env.EXPO_PUBLIC_CLIENT_ID +
      ":" +
      process.env.EXPO_PUBLIC_CLIENT_SECRET,
  ),
);

export const authApi = ky.create({
  prefixUrl: rawPrefixUrl + authServerUrl,
  timeout: 30000,
  retry: 3,
  hooks: {
    beforeRequest: [
      async (request) => {
        request.headers.set("Authorization", authorization);
      },
    ],
    beforeError: [
      async (error) => {
        const response = await error.response.json();
        return response as HTTPError;
      },
    ],
  },
});
