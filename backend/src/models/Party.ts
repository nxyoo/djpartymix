import mongoose, { Document, Schema } from 'mongoose';

export interface IParty extends Document {
    name: string;
    code: string;
    createdAt: Date;
}

const PartySchema: Schema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});

const Party = mongoose.model<IParty>('Party', PartySchema);

export default Party;
