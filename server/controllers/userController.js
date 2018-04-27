/**
 * Created by babad on 7/2/2017.
 */
import db from '../models';

const userController = {};

userController.post = (req, res) => {
    const {username, password} = req.body;

    // validation later
    const user = new db.User({
        username,
        password
    });

    user.save().then((newUser) => {
        res.status(200).json({
            success: true,
            data: newUser
        });
    }).catch((err) => {
        res.status(500).json({
            message: err
        });
    });
};

export default userController;