import mongoose, {Schema} from "mongoose";
import Like from "../../models/bookmarks/Bookmark";

const BookmarkSchema = new mongoose.Schema<Like>({
    bookmarkedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    bookmarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "bookmarks"});
export default BookmarkSchema;
