import express from 'express';
import Peep from '../src/peep.model.js';

export const router = express.Router();

router.route('/')
    .post((req, res) => {
        const peepToAdd = new Peep(req.body);
        console.log(req.body);
        peepToAdd.save()
            .then(peep => {
                res.status(200).send({ 'peep': 'Peep added successfully!' })
            })
            .catch(err => res.status(400).json(err));
    })