import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    content: {type: String, require: true},
    image: {type: String},
    category: {type: String},
    top: {type: Boolean},
    author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const NewsModel = mongoose.model("newses", DataSchema);

export default NewsModel;
