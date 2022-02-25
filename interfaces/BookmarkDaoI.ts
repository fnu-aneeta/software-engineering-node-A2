import Bookmark from "../models/bookmarks/Bookmark";

/**
 * @file Declares API for Likes related data access object methods
 */
export default interface BookmarkDaoI {
    findAllUsersThatBookmarkedTuit (tid: string): Promise<Bookmark[]>;
    findAllTuitsBookmarkedByUser (uid: string): Promise<Bookmark[]>;
    userBookmarksTuit (tid: string, uid: string): Promise<any>;
    userUnbookmarksTuit (tid: string, uid: string): Promise<Bookmark>;
};