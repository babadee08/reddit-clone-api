/**
 * Created by babad on 7/2/2017.
 */
import db from '../models';

const commentController = {};

commentController.post = (req, res) => {
    const {text, userId, postId} = req.body;

    // validation later
    const comment = new db.Comment({
        text,
        _creator: userId,
        _post: postId
    });

    comment.save().then((newComment) => {
        db.Post.findByIdAndUpdate(postId, {
            $push: {'_comment': newComment._id}
        }).then((existingPost) => {
            res.status(200).json({
                success: true,
                data: newComment, existingPost
            });
        }).catch((err) => {
            res.status(500).json({
                message: err
            });
        });
    }).catch((err) => {
        res.status(500).json({
            message: err
        });
    });
};

export default commentController;