import { api } from "../Api";
import { SearchRequestProps, SearchRequestResponse } from "./type";

const searchRequest = async (searchParams: SearchRequestProps) => {
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) params.set(key, String(value));
  });
  return await api
    .post("search/", { searchParams: params })
    .json<SearchRequestResponse>();
};

export default searchRequest;
