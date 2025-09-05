import ky from "ky";

// Create configured ky instance
const rawPrefixUrl = process.env.EXPO_PUBLIC_API_URL;
const normalizedPrefixUrl = rawPrefixUrl?.endsWith("/")
  ? rawPrefixUrl
  : `${rawPrefixUrl}/`;

const api = ky.create({
  prefixUrl: normalizedPrefixUrl,
  timeout: 30000,
  retry: 3,
  hooks: {
    beforeRequest: [
      async (request) => {
        console.log("beforeRequest", request.url);
        request.headers.set("Content-Type", "application/json");
      },
    ],
  },
});

// HTTP method utilities
export const get = async <T>(url: string): Promise<T> => {
  const response = await api.get(url);
  return response.json();
};

export const post = async <T>(
  url: string,
  data?: unknown,
  headers?: Record<string, string>,
): Promise<T> => {
  const response = await api.post(url, { json: data, headers });
  return response.json();
};

export const put = async <T>(url: string, data?: unknown): Promise<T> => {
  const response = await api.put(url, { json: data });
  return response.json();
};

export const patch = async <T>(url: string, data?: unknown): Promise<T> => {
  const response = await api.patch(url, { json: data });
  return response.json();
};

export const del = async <T>(url: string): Promise<T> => {
  const response = await api.delete(url);
  return response.json();
};

export default api;
