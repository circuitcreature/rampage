import { createContext, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, selectAuthenticated } from '../features/user/userSlice'
import { ping } from '../features/user/userService'

import { LoginForm } from "../components/Login";

const AuthContext = createContext({});

export const Auth = ( props ) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectAuthenticated);
  const authUser = useSelector(selectUser);

  useEffect( () => {
    if( !isAuthenticated ){
      dispatch( ping )
    }
  }, [isAuthenticated]);

  if( !isAuthenticated ){
    return <LoginForm />
  }

  return (
    <AuthContext.Provider value={authUser}>
      {props.children}
    </AuthContext.Provider>
  );
};