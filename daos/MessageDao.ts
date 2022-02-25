import MessageModel from "../mongoose/messages/MessageModel";
import Message from "../models/message/Message";
import MessageDaoI from "../interfaces/MessageDaoI";

export default class MessageDao implements MessageDaoI {
    private static messageDao: MessageDao | null = null;
    public static getInstance = (): MessageDao => {
        if(MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }

    private constructor() {}

    findAllMessageReceivedFromUser = async(uid: string): Promise<Message[]> =>
    MessageModel
        .find({receivedFrom: uid})
        .exec();

    findAllMessageSentToUser = async(uid: string): Promise<Message[]> =>
        MessageModel
            .find({sentTo: uid})
            .exec()

    userMessageUser = (message: Message, uid1: string, uid2: string): Promise<Message> =>
        MessageModel.create({...message, receivedFrom: uid1, sentTo: uid2})

    userDeleteMessage = async(mid: string): Promise<any> =>
        MessageModel.deleteOne({_id: mid});


}
