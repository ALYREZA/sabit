import { registerRequest } from "@/utils/http/auth";
import { useMutation } from "@tanstack/react-query";

export function useRegister() {
  return useMutation({
    mutationFn: registerRequest,
    mutationKey: ["authentication", "register"],
  });
}
