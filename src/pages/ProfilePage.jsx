import React from "react";
import Layout from "../components/layout/Layout";
import UserNewsList from "../components/news/UserNewsList";
import NewsStore from "../store/NewsStore";
import { useEffect } from "react";
import CreateNews from "../components/news/CreateNews";

function ProfilePage() {
  const { NewsListRequest } = NewsStore();
  useEffect(() => {
    (async () => {
      await NewsListRequest();
    })();
  }, []);
  
  return (
    <Layout>
      <CreateNews />
      <UserNewsList />
    </Layout>
  );
}

export default ProfilePage;
