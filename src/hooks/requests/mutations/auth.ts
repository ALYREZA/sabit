import { loginRequest, registerRequest } from "@/utils/http/auth";
import { LoginRequestProps } from "@/utils/http/type";
import { useMutation } from "@tanstack/react-query";

export function useRegister() {
  return useMutation({
    mutationFn: registerRequest,
    mutationKey: ["authentication", "register"],
  });
}
export function useLogin({ username }: { username: string }) {
  return useMutation({
    mutationFn: (data: LoginRequestProps) =>
      loginRequest({
        username,
        grant_type: "password",
        scope: "openid",
        ...data,
      }),
    mutationKey: ["authentication", "login"],
  });
}
