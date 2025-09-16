
import mongoose from "mongoose";
import NewsModel from "../models/NewsModel.js";

const { ObjectId } = mongoose.Types;

export const CreateNewsService = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await NewsModel.create(reqBody);

    return {
      status: "success",
      message: "Created news successfuly",
      data: data,
    };
  } catch (error) {
    return { status: "fail", error: error.toString() };
  }
};

export const ReadNewsService = async (req, res) => {
  try {
    let data = await NewsModel.find();
    //console.log(data);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", error: error.toString() };
  }
};

export const DeleteNewsService = async (req, res) => {
  try {
    let id = new ObjectId(req.params.newsId);

    let data = await NewsModel.deleteOne({ _id: id });
    return {
      status: "success",
      message: "News deleted successfully",
      data: data,
    };
  } catch (error) {
    return { status: "fail", error: error.toString() };
  }
};

export const EditNewsService = async (req, res) => {
  try {
    let id = new ObjectId(req.params.newsId);
    let reqBody = req.body;

    let data = await NewsModel.updateOne({_id: id}, {$set: reqBody});

    return {
      status: "success",
      message: "News edited successfully",
      data: data,
    };
  } catch (error) {
    return { status: "fail", error: error.toString() };
  }
};
