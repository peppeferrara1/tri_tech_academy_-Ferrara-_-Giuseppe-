import { Timestamp, TimestampProvider } from "rxjs";

export interface Movement{
    idMovement: number,
    product: number,
    quantityChange: number,
    timestamp: Date,
    type: String;
}