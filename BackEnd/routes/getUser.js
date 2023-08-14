import express from 'express';
import User from '../src/user.model.js';

export const router = express.Router();

router.route('/:username').get((req, res) => {
    const username = req.params.username;
    User.findOne({ "username": username })
        .then(user => {
            if (user == null) {
                res.status(404).send("Hmm that user doesn't exist!")
            } else
                res.send(`Welcome ${user.name}!`);
        })

})