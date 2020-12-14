import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    try {

    } catch (err) {
        return response.status(400).json({ error: err.messege });
    };

})

export default usersRouter