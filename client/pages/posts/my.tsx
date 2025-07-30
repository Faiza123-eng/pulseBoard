import Head from "next/head";
import { ReactNode } from "react";
import { Authenticated } from "../../components/Authenticated";
import { MyPosts } from "../../content/post";
import { DefaultLayout } from "../../layout/DefaultLayout/DefaultLayout";
import { NextPageWithLayout } from "../../types/next.types";

const MyPostsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>DJ PubNub - My Posts</title>
      </Head>
      <MyPosts />
    </>
  );
};

MyPostsPage.getLayout = (page: ReactNode) => {
  return (
    <Authenticated>
      <DefaultLayout>{page}</DefaultLayout>
    </Authenticated>
  );
};

export default MyPostsPage;
