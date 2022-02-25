import MessageDao from "../daos/MessageDao";
import Message from "../models/message/Message";
import {Express, Request, Response} from "express";
import MessageControllerI from "../interfaces/MessageControllerI";

export default class MessageController implements MessageControllerI {
    private static messageDao: MessageDao = MessageDao.getInstance();
    private static messageController: MessageController | null = null;


    public static getInstance = (app: Express): MessageController => {
        if(MessageController.messageController === null) {
            MessageController.messageController = new MessageController();
            app.get("/api/users/:uid/messagesSent", MessageController.messageController.findAllMessageSentToUser);
            app.get("/api/users/:uid/messagesReceived", MessageController.messageController.findAllMessageReceivedFromUser);
            app.post("/api/users/:uid1/messages/:uid2", MessageController.messageController.userMessageUser);
            app.delete("/api/messages/:mid", MessageController.messageController.userDeleteMessage);
        }
        return MessageController.messageController;
    }

        private constructor() {}

    findAllMessageSentToUser = (req: Request, res: Response) =>
        MessageController.messageDao.findAllMessageSentToUser(req.params.uid)
            .then(message => res.json(message));

    findAllMessageReceivedFromUser = (req: Request, res: Response) =>
        MessageController.messageDao.findAllMessageReceivedFromUser(req.params.uid)
            .then(message => res.json(message));


    userMessageUser = (req: Request, res: Response) =>
        MessageController.messageDao.userMessageUser(req.body, req.params.uid1, req.params.uid2)
            .then(message => res.json(message));

    userDeleteMessage = (req: Request, res: Response) =>
        MessageController.messageDao.userDeleteMessage(req.params.mid)
            .then((status) => res.send(status));


}
