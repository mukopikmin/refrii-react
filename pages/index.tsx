import Link from "next/link";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../components/Auth";
import Layout from "../components/Layout";
import SignInButton from "../components/SignInButton";
import { fetchBoxes } from "../store/effects/boxEffect";

const IndexPage = () => {
  const dispatch = useDispatch();

  const { currentUser } = useContext(AuthContext);

  const onClickIncrement = () => {
    dispatch(fetchBoxes({ token: currentUser.ya }));
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <button onClick={onClickIncrement}>test</button>
      <SignInButton />
    </Layout>
  );
};

export default IndexPage;
