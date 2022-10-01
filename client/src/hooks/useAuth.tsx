import * as React from "react";

export interface authProps {
  authed: boolean
  login(): Promise<unknown>
  logout(): Promise<unknown>
}

const authContext = React.createContext({} as authProps);

function useAuth() {
  const [authed, setAuthed] = React.useState(false);

  return {
    authed,
    login() {
      return new Promise((res) => {
        setAuthed(true);
        res(null);
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        res(null);
      });
    },
  };
}

export function AuthProvider({ children }:{children: React.ReactNode}) {
  const auth:authProps = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}