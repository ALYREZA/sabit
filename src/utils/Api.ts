import { events } from "@/utils/events";
import ky, { HTTPError } from "ky";

// Create configured ky instance
const rawPrefixUrl = process.env.EXPO_PUBLIC_API_URL as string;
const authServerUrl = process.env.EXPO_PUBLIC_AUTHENTICATION_SERVER as string;
const searchServerUrl = process.env.EXPO_PUBLIC_SEARCH_SERVICE as string;
export const authorization = "Basic ".concat(
  btoa(
    process.env.EXPO_PUBLIC_CLIENT_ID +
      ":" +
      process.env.EXPO_PUBLIC_CLIENT_SECRET,
  ),
);

// Keep an in-memory token updated via events from AuthContext
let currentToken: string | null = null;
events.on("auth:token", (token) => {
  currentToken = token ?? null;
});

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

export const api = ky.create({
  prefixUrl: rawPrefixUrl + searchServerUrl,
  timeout: 30000,
  retry: 3,
  hooks: {
    beforeRequest: [
      async (request) => {
        if (currentToken) {
          request.headers.set("Authorization", `Bearer ${currentToken}`);
        }
      },
    ],
    beforeError: [
      async (error) => {
        const response = await error.response.json();
        if (error.response.status === 401) {
          events.emit("auth:logout");
        }
        return response as HTTPError;
      },
    ],
  },
});
