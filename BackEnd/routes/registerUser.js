import express from 'express';
import User from '../src/user.model.js';

export const router = express.Router();

router.route('/').post((req, res) => {
    const newUser = new User(req.body);
    newUser.save()
        .catch(err => {
            if (err.code === 11000) {
                res.status(400).send({ 'user': 'Someone already has this username or email.' })
            } else {
                res.status(500).send(err);
            }

        }).then(user => {
            console.log(user);
            res.status(200).send({ 'user': 'You have registered successfully!' })
        })
})