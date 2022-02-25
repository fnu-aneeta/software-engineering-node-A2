/**
 * @file Declares Like data type representing relationship between
 * users and follows, as in user follows a user
 */
import User from "../users/User";

export default interface Follow {
    userFollowed: User,
    userFollowing: User
}
