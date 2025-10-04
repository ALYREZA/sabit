import { createContext, use, type PropsWithChildren } from "react";
import { useStorageState } from "./useStorageState";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AuthContextType {
  signIn: (user: User, token: string) => void;
  signOut: () => void;
  user?: User | null;
  token?: string | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  signIn: () => null,
  signOut: () => null,
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
  const [[isLoading, token], setToken] = useStorageState("auth_token");
  const [[, user], setUser] = useStorageState("user_data");

  const signIn = (userData: User, authToken: string) => {
    setToken(authToken);
    setUser(JSON.stringify(userData));
  };

  const signOut = () => {
    setToken(null);
    setUser(null);
  };

  const parsedUser = user ? JSON.parse(user) : null;

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: parsedUser,
        token,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
