import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/follows/FollowModel";

import Follow from "../models/follows/Follow";

export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null;
    public static getInstance = (): FollowDao => {
        if (FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }

    private constructor() {
    }

    findAllUsersFollowingUser = async (uid1: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowed: uid1})
            .populate("userFollowing")
            .exec();

    findAllUsersFollowedByUser = async (uid1: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowing: uid1})
            .populate("userFollowed")
            .exec();

    userFollowsAnotherUser = async (uid1: string, uid2: string): Promise<any> =>
        FollowModel.create({userFollowed: uid1, userFollowing: uid2});

    userUnfollowsAnotherUser = async (uid1: string, uid2: string): Promise<any> =>
        FollowModel.deleteOne({userFollowed: uid1, userFollowing: uid2});
}
