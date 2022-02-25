import mongoose , {Schema} from "mongoose";
import Message from "../../models/message/Message";

const MessageSchema = new mongoose.Schema<Message>( {
    message: {type: String, required: true},
    sentTo: {type: Schema.Types.ObjectId, ref: "UserModel"},
    receivedFrom: {type: Schema.Types.ObjectId, ref: "UserModel"},
    sentOn: {type: Date, default: Date.now}

}, {collection: "messages"});
export default MessageSchema
