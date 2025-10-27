import { useAuth } from "@/contexts/AuthContext";
import { loginRequest, registerRequest } from "@/utils/http/auth";
import { LoginRequestProps, LoginRequestResponse } from "@/utils/http/type";
import { useMutation } from "@tanstack/react-query";

export function useRegister() {
  return useMutation({
    mutationFn: registerRequest,
    mutationKey: ["authentication", "register"],
  });
}
export function useLogin({ username }: { username: string }) {
  const { signIn, setUser } = useAuth();
  return useMutation({
    mutationFn: (data: LoginRequestProps) =>
      loginRequest({
        username: username.slice(1),
        grant_type: "password",
        scope: "openid",
        ...data,
      }),
    mutationKey: ["authentication", "login"],
    onSuccess: (data: LoginRequestResponse) => {
      signIn(data.accessToken, data.refreshToken);
      setUser({
        id: data.id,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        fatherName: data.fatherName,
        birthDate: data.birthDate,
        mobile: data.mobile,
        balance: data.balance,
        authorized: data.authorized,
      });
    },
  });
}
