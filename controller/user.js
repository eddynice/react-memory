import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async(req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "user does not exist" });
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "invalid cres" });
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' })
        res.status(200).json({ result: existingUser, token })
    } catch (error) {
        res.status(500).json({ message: ' error.message' })

    }
}


export const signup = async(req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    console.log(req.body)
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) return res.status(400).json({ message: "user already exis" })
        if (password !== confirmPassword) return res.status(400).json({ message: "useras already exist" })
            //  console.log('llll')
        const hashPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ email, password: hashPassword, name: `${firstName} ${lastName}` })
        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" })
        res.status(200).json({ result, token })
    } catch (error) {
        res.status(500).json(error)

    }
}