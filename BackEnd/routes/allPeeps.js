import express from 'express';
import Peep from '../src/peep.model.js';

export const router = express.Router();

router.route('/').get((req, res) => {
    // res.send("Getting all the peeps")

    Peep.find().sort({ time: 'descending' }).then(allPeeps => {
        res.send(allPeeps)
    })

});

