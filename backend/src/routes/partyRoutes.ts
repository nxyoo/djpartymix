import { Router } from 'express';
import { createParty, getParties, getParty, updateParty, deleteParty } from '../controllers/partyController';

const router = Router();

router.post('/party', createParty);
router.get('/parties', getParties);
router.get('/party/:id', getParty);
router.put('/party/:id', updateParty);
router.delete('/party/:id', deleteParty);

export default router;
