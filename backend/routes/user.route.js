import express from 'express';
import User from '../models/user.model.js';
const router = express.Router();
import bcrypt from 'bcryptjs';

router.post("/create", async (req, res) => {
    const userinfo = req.body;
    const hashedPassword = await bcrypt.hash(userinfo.hashedPassword, 10);
    await User.create({
        displayName: userinfo.displayName,
        username: userinfo.username,
        email: userinfo.email,
        img: userinfo.img,
        hashedPassword: hashedPassword
    })

    res.json("User Created Successfully");
});

router.get("/fetch", async (req, res) => {
    const users = await User.find({}, { hashedPassword: 0 });
    res.json(users);
});

export default router;