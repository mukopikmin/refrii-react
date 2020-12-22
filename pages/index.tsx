import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../components/Auth";
import Landing from "../components/Landing";

const IndexPage = () => {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      router.push("/boxes");
    }
  }, [currentUser]);

  return (
    <div>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div,
        div#__next > div > div {
          height: 100%;
        }
      `}</style>

      <Landing />
    </div>
  );
};

export default IndexPage;
