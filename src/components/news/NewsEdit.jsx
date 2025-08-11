import React from "react";
import Layout from "../layout/Layout";
import EditForm from "./EditForm";
import NewsStore from "../../store/NewsStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function NewsEdit() {
  const { id } = useParams();
  const {NewsList, NewsListRequest,NewsFormChange } = NewsStore();
  useEffect(() => {
    (async () => {
      await NewsListRequest();
    })();
  }, []);

  useEffect(() => {
    if (NewsList) {
      const selected = NewsList.find((item) => item._id === id);
      if (selected) {
        Object.entries(selected).forEach(([key, value]) => {
          NewsFormChange(key, value);
        });
      }
    }
  }, [NewsList, id]);

  return (
    <Layout>
      <EditForm newsId={id} />
    </Layout>
  );
}

export default NewsEdit;
