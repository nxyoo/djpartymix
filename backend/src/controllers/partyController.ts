import { Request, Response } from 'express';
import Party from '../models/Party';

export const createParty = async (req: Request, res: Response) => {
    try {
        const { name, code } = req.body;
        const newParty = new Party({ name, code });
        await newParty.save();
        res.status(201).json(newParty);
    } catch (error) {
        res.status(500).json({ message: 'Error creating party', error });
    }
};

export const getParties = async (req: Request, res: Response) => {
    try {
        const parties = await Party.find();
        res.status(200).json(parties);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching parties', error });
    }
};

export const getParty = async (req: Request, res: Response) => {
    try {
        const party = await Party.findById(req.params.id);
        if (!party) {
            return res.status(404).json({ message: 'Party not found' });
        }
        res.status(200).json(party);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching party', error });
    }
};

export const updateParty = async (req: Request, res: Response) => {
    try {
        const updatedParty = await Party.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedParty) {
            return res.status(404).json({ message: 'Party not found' });
        }
        res.status(200).json(updatedParty);
    } catch (error) {
        res.status(500).json({ message: 'Error updating party', error });
    }
};

export const deleteParty = async (req: Request, res: Response) => {
    try {
        const deletedParty = await Party.findByIdAndDelete(req.params.id);
        if (!deletedParty) {
            return res.status(404).json({ message: 'Party not found' });
        }
        res.status(200).json({ message: 'Party deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting party', error });
    }
};
