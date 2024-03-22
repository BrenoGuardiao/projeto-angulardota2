import { Schema, model } from "mongoose";

export interface Hero{
    id:string;
    name:string;
    attribute:string;
    position:string;
    imageUrl:string;
    matches:string;
    desc:string;
}

export const HeroSchema = new Schema<Hero>(
    {
        name: {type: String, required:true},
        attribute: {type: String, required:true},
        position: {type: String, required:true},
        imageUrl: {type: String, required:true},
        matches: {type: String, required:true},
        desc: {type: String, required:true},
        
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);

export const HeroModel = model<Hero>('hero', HeroSchema);