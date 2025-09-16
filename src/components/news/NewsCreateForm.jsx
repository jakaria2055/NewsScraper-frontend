import React from "react";
import NewsStore from "../../store/NewsStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function NewsCreateForm() {
  let navigate = useNavigate();
  const { NewsForm, NewsFormChange, NewsCreateRequest } = NewsStore();

  const save = async () => {
    let res = await NewsCreateRequest(NewsForm);
    if (res) {
      toast.success("News Created Successfully.");
      navigate(`/profile`);
    }
  };
  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <legend className="fieldset-legend">News details</legend>

        <label className="label">Title</label>
        <input
          value={NewsForm.title}
          onChange={(e) => {
            NewsFormChange("title", e.target.value);
          }}
          type="text"
          className="input w-7xl"
        />

        <label className="label">Category</label>
        <input
          value={NewsForm.category}
          onChange={(e) => {
            NewsFormChange("category", e.target.value);
          }}
          type="text"
          className="input w-7xl"
        />

        <label className="label">Image Link</label>
        <input
          value={NewsForm.image}
          onChange={(e) => {
            NewsFormChange("image", e.target.value);
          }}
          type="text"
          className="input w-7xl"
        />

        <label className="label">Description</label>
        <input
          value={NewsForm.content}
          onChange={(e) => {
            NewsFormChange("content", e.target.value);
          }}
          type="text"
          className="input w-7xl textarea"
        />

        <div className="flex items-center gap-5">
          <label className="label">Top News?</label>

          <label>
            <input
              type="radio"
              name="top"
              value={false}
              checked={NewsForm.top === false}
              onChange={() => NewsFormChange("top", false)}
            />{" "}
            False
          </label>

          <label>
            <input
              type="radio"
              name="top"
              value={true}
              checked={NewsForm.top === true}
              onChange={() => NewsFormChange("top", true)}
            />{" "}
            True
          </label>
        </div>

        <div className="">
          <button
            onClick={save}
            className="rounded-md border bg-blue-400 hover:bg-blue-600 text-white font-bold px-4 py-2 w-sm"
          >
            Submit
          </button>
        </div>
      </fieldset>
    </>
  );
}

export default NewsCreateForm;
