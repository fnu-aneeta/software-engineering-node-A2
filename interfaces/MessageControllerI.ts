import {Request, Response} from "express";
import Message from "../models/message/Message";

export default interface MessageControllerI {
    userMessageUser (req: Request, res: Response): void;
    userDeleteMessage (req: Request, res: Response): void;
    findAllMessageSentToUser (req: Request, res: Response): void;
    findAllMessageReceivedFromUser (req: Request, res: Response): void;
};
