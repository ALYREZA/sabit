import searchRequest from "@/utils/http/search";
import { SearchRequestProps } from "@/utils/http/type";
import { useQuery } from "@tanstack/react-query";

const useSearch = (searchParams: SearchRequestProps = { t: "l" }) => {
  return useQuery({
    queryKey: ["search", searchParams.t],
    queryFn: () => searchRequest(searchParams),
  });
};

export default useSearch;
