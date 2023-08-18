import express from 'express';
import Peep from '../src/peep.model.js';
import User from '../src/user.model.js';
export const router = express.Router();
import response from '../src/function.js';

router.route('/').get((req, res) => {
    // res.send("Getting all the peeps")

    Peep.find().sort({ time: 'descending' }).then(allPeeps => {
        User.find().then((allUsers) => {
            let displayResponse = response(allPeeps, allUsers);
            res.send(displayResponse);
        })
    })
})
