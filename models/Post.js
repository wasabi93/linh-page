import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    album: String,
    name: String,
    position: Number,
    likes: { type: [String], default:[]},
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

export default mongoose.model.Post || mongoose.model('Post', PostSchema)