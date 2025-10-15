import { events } from "@/utils/events";
import { createContext, use, useEffect, type PropsWithChildren } from "react";
import { useStorageState } from "./useStorageState";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AuthContextType {
  signIn: (token: string, refreshToken: string) => void;
  signOut: () => void;
  setUser: (userData: User) => void;
  user?: User | null;
  token?: string | null;
  isLoading: boolean;
  refreshToken?: string | null;
}

const AuthContext = createContext<AuthContextType>({
  signIn: () => null,
  signOut: () => null,
  setUser: () => null,
  user: null,
  token: null,
  isLoading: false,
});

// Use this hook to access the user info.
export function useAuth() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error("useAuth must be wrapped in a <AuthProvider />");
  }

  return value;
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [[isLoadingToken, token], setToken] = useStorageState("auth_token");
  const [[isLoadingRefreshToken, refreshToken], setRefreshToken] =
    useStorageState("refresh_token");
  const [[, user], setUserData] = useStorageState("user_data");
  const isLoading = isLoadingToken || isLoadingRefreshToken;

  // Broadcast token changes for API layer subscribers
  useEffect(() => {
    events.emit("auth:token", token ?? null);
  }, [token]);

  const signIn = (authToken: string, refreshToken: string) => {
    setToken(authToken);
    setRefreshToken(refreshToken);
  };

  const setUser = (userData: User) => {
    setUserData(JSON.stringify(userData));
  };
  const signOut = () => {
    setToken(null);
    setRefreshToken(null);
    setUserData(null);
  };

  const parsedUser = user ? JSON.parse(user) : null;

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        setUser,
        user: parsedUser,
        token,
        isLoading,
        refreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
