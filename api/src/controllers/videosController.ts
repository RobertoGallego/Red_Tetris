import { Response, RequestHandler } from "express";

import video from "app/models/videoSchema";

export const createVideo: RequestHandler = async (req, res) => {
    const videoFound = await video.findOne({ url: req.body.url });
    if (videoFound)
        return res.status(303).json({ message: "the url already exists" });

    const newVideo = new video(req.body);
    const savedVideo = await newVideo.save();
    res.json(savedVideo);
};

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await video.find();
        return res.json(videos);
    } catch (error) {
        res.json(error);
    }
};

export const getVideo: RequestHandler = async (req, res) => {
    const videoFound = await video.findById(req.params.id);

    if (!videoFound) { 
        return res.status(204).json();
    }
    
    return res.json(videoFound);
};

export const deleteVideo: RequestHandler = async (req, res) => {
    const videoFound = await video.findByIdAndDelete(req.params.id);

    if (!videoFound) {
        return res.status(204).json();
    }

    return res.status(204).json();
};

export const updateVideo: RequestHandler = async (req, res): Promise<Response> => {
    const videoUpdated = await video.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    if (!videoUpdated) { 
        return res.status(204).json();
    }

    return res.json(videoUpdated);
};
