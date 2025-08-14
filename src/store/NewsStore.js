import axios from "axios";
import { create } from "zustand";
import { unauthorized } from "../utility/utility";


const NewsStore = create((set) => ({
  NewsForm: {
    title: "",
    content: "",
    image: "",
    category: "",
    top: "",
  },
  NewsFormChange: (name, value) => {
    set((state) => ({
      NewsForm: {
        ...state.NewsForm,
        [name]: value,
      },
    }));
  },

  NewsList: null,
  NewsListRequest: async () => {
    let res = await axios.get(`/api/v1/ReadNews`);
    if (res.data["status"] === "success") {
      set({ NewsList: res.data["data"] });
    }
  },

  NewsCreateRequest: async (PostBody) => {
    try {
      set({ NewsList: null });
      let res = await axios.post(`/api/v1/CreateNews`, PostBody);
      return res.data["status"] === "success";
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

  NewsUpdateRequest: async (newsId, PostBody) => {
    try {
      set({ NewsList: null });
      let res = await axios.put(`/api/v1/EditNews/${newsId}`, PostBody);
      return res.data["status"] === "success";
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

  RemoveNewsRequest: async (newsId) => {
    try {
      set((state) => ({
        NewsList: state.NewsList?.filter((item) => item.newsId !== newsId),
      }));
      await axios.delete(`/api/v1/DeleteNews/${newsId}`);
    } catch (e) {
      unauthorized(e.response.status);
    }
  },
}));

export default NewsStore;
