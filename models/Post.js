import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    album: String,
    name: String,
    position: Number,
    link: String,
    description: String,
    likes: Number,
    createAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)