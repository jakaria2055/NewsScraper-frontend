import React from "react";
import NewsCard from "../layout/NewsCard";
import NewsStore from "../../store/NewsStore";
import { useEffect } from "react";
import TopNewsCard from "../layout/TopNewsCard";

function News() {
  const { NewsList, NewsListRequest } = NewsStore();

  useEffect(() => {
    (async () => {
      await NewsListRequest();
    })();
  }, []);

  return (
    <>
      <div className="space-y-8">
        {/* Top News */}
        <section>
          <TopNewsCard />
        </section>

        <hr className="border-t border-gray-200" />

        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              News, You May Know
            </h2>
          </div>
          <div className="flex flex-wrap gap-5">
            <NewsCard />
          </div>
        </section>
      </div>
    </>
  );
}

export default News;
