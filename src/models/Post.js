const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    image: String,
    title: String,
    post: String,
    autor: String
}, {
    toJSON: {
        virtuals: true
    }
});

PostSchema.virtual('image_URL').get(function() {
    return `${process.env.APP_URL}files/${this.image}`
})

module.exports = model('Post', PostSchema);