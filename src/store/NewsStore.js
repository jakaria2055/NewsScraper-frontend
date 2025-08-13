import axios from "axios";
import { create } from "zustand";
import { unauthorized } from "../utility/utility";
import API_BASE_URL from "../config";

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
    let res = await axios.get(`${API_BASE_URL}/ReadNews`);
    if (res.data["status"] === "success") {
      set({ NewsList: res.data["data"] });
    }
  },

  NewsCreateRequest: async (PostBody) => {
    try {
      set({ NewsList: null });
      let res = await axios.post(`${API_BASE_URL}/CreateNews`, PostBody);
      return res.data["status"] === "success";
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

  NewsUpdateRequest: async (newsId, PostBody) => {
    try {
      set({ NewsList: null });
      let res = await axios.put(`${API_BASE_URL}/EditNews/${newsId}`, PostBody);
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
      await axios.delete(`${API_BASE_URL}/DeleteNews/${newsId}`);
    } catch (e) {
      unauthorized(e.response.status);
    }
  },
}));

export default NewsStore;
