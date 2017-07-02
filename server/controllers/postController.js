/**
 * Created by babad on 7/2/2017.
 */
import db from '../models'
const postController = {};

postController.post = (req, res) => {
    const {title, text, link, userId} = req.body;

    const post = new db.Post({
        title, text, link, _creator: userId
    });

    post.save().then((newPost) => {
        return res.status(200).json({
            success: true,
            data: newPost
        });
    }).catch(() => {
        res.status(500).json({
            message: err
        });
    });
};

postController.getAll = (req, res) => {
    db.Post.find({})
        .populate({path:'_creator', select: 'username createdAt -_id'})
        .populate({path:'_comment', select: 'text createdAt, _creator', match: {'isDeleted': false}})
        .then((posts) => {
        res.status(200).json({
            success: true,
            data: posts
        })
    }).catch((err) => {
        res.status(500).json({
            message: err
        });
    });
};

postController.flush = (req, res) => {
    db.Post.remove({}).then((response) => {
        console.log(response);
        res.status(200).json({});
    }).catch((err) => {
        console.log(err);
        res.status(500);
    });
};

export default postController;