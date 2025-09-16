import { CreateNewsService, DeleteNewsService, EditNewsService, ReadNewsService } from "../services/NewsServices.js";



export const CreateNews = async (req, res) => {
    const result = await CreateNewsService(req, res);
    return res.status(201).json(result);
}

export const ReadNews = async (req, res) => {
    const result = await ReadNewsService(req, res);
    return res.status(200).json(result);
}

export const EditNews = async (req, res) => {
    const result = await EditNewsService(req, res);
    return res.status(201).json(result);
}

export const DeleteNews = async (req, res) => {
    const result = await DeleteNewsService(req, res);
    return res.status(201).json(result);
}

