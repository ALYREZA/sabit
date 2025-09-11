import ky from "ky";

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
        console.log("beforeRequest", request.url);
        console.log("====================================");
        console.log({ authorization });
        console.log("====================================");
        request.headers.set("Content-Type", "application/json");
        request.headers.set("Authorization", authorization);
      },
    ],
  },
});
