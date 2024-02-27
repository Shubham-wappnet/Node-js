const mongoose=require('mongoose')
const{Schema}=mongoose

const postSchema= new Schema({
    // postId: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Active', 'Deleted'],
        default: 'Active',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    file_path: {
        type: String,
        
        
    }
}, {
    timestamps: true
});

const Post=mongoose.model('Post',postSchema);
module.exports=Post;