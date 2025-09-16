import { Link } from "react-router-dom";

function CreateNews() {
  return (
    <div className="bg-blue-50 rounded-xl p-8 text-center mb-5">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Ready to elevate your News?
      </h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Join thousands of journalist already growing with NewsScraper
      </p>
      <Link to={'/createnews'}  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
        Get Started Now
      </Link>
    </div>
  );
}

export default CreateNews;
