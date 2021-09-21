const Post = require('../models/Post');

class PostController{

    async show(req, res){

        const posts = await Post.find();

        return res.json(posts);
    }

    async store(req, res){

        const {filename} = req.file;
        const {image, title, post, autor} = req.body;

        const posts = await Post.create({
            image: filename,
            title,
            post,
            autor
        });

        return res.json(posts);

    }

    async destroy(req, res){
        const {post_id} = req.body;

        await Post.findByIdAndDelete({_id: post_id});

        return res.json({message: "Excluido com sucesso"});
    }

}

module.exports = new PostController();