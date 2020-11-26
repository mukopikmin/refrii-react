import { GetStaticProps } from "next";
import Link from "next/link";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";
import { useDispatch, useSelector } from "react-redux";
import { userSelctor, useUserState } from "../../store/selectors/userSelector";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../components/Auth";
import { fetchUsers } from "../../store/effects/userEffect";

type Props = {
  items: User[];
};

const UsersPage = ({ items }: Props) => {
  const dispatch = useDispatch();
  // const users = useSelector(userSelctor.selectAll);
  const users = useUserState();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    dispatch(fetchUsers({ token: currentUser?.ya }));
  }, [currentUser]);

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      <List items={users} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default UsersPage;
