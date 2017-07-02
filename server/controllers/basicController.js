/**
 * Created by babad on 7/2/2017.
 */
const basicController = {};

basicController.get = (req, res) => {
    res.json({
        message: 'Welcome to our API!'
    });
};

export default basicController;