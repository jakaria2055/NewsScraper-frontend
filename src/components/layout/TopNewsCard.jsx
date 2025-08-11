import NewsStore from "../../store/NewsStore";
import NewsSkeleton from "../../skeleton/NewsSkeleton";
import { Link } from "react-router-dom";

function TopNewsCarousel() {
  const { NewsList } = NewsStore();

  if (!NewsList) {
    return <NewsSkeleton />;
  }


  const topNews = NewsList.filter((item) => item.top === true);

  return (
    <section className="py-8">
      <div className="carousel w-full">
        {topNews.map((item, index) => {
          const slideId = `slide${index + 1}`;
          const prevId = `slide${index === 0 ? topNews.length : index}`;
          const nextId = `slide${(index + 2) > topNews.length ? 1 : index + 2}`;

          return (
            <div
              id={slideId}
              key={item._id}
              className="carousel-item relative w-full justify-center"
            >
              <div className="flex justify-center w-full px-4">
                <div className="card bg-base-100 image-full w-full max-w-md shadow-xl">
                  <figure>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.content.slice(0, 80)}...</p>
                    <div className="card-actions justify-end">
                      <Link to={`/newsdetails/${item._id}`} className="btn btn-primary">View Details</Link>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#${prevId}`} className="btn btn-circle">❮</a>
                <a href={`#${nextId}`} className="btn btn-circle">❯</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TopNewsCarousel;
