import { Document } from 'mongoose';

export interface User extends Document {
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    readonly address: string;
    readonly created_at: Date;
}