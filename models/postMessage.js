import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tag: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    comment: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('postmessage', postSchema);

export default PostMessage;