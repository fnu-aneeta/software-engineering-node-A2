import User from "../users/User";

export default interface Message {
    message : string,
    sentTo: User,
    receivedFrom: User,
    sentOn: Date,
};
