import User from '../models/user.model.js';

export const getUser = async (req, res) => {
    const { username } = req.params;

    const user = await User.findOne({ username });
    const { hasedPassword, ...userData } = user.toObject(); // Exclude password from response
    res.status(200).json(userData);

};