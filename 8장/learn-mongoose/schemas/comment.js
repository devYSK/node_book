const mongoose = require('mongoose');

const {Schema} = mongoose;

const {Types: {ObjectID}} = Schema;

const commentSchema = new Schema({
    commenter: {
        type: ObjectID,
        required: true,
        ref: 'User',
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Comment', commentSchema);



