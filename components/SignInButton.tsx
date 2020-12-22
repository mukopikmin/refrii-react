import { FC, useEffect, useContext } from "react";
import Router from "next/router";
import firebase from "../utils/firebase";
import { AuthContext } from "./Auth";
import { Button } from "@chakra-ui/react";

const SignInButton: FC = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    currentUser && Router.push("/");
  }, [currentUser]);

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  if (currentUser) {
    return <span>{currentUser.displayName}</span>;
  }

  return (
    <Button onClick={login} colorScheme="blue">
      Google でログイン
    </Button>
  );
};

export default SignInButton;
