import { Patruped } from "./patruped";

export class Dog extends Patruped{
    powerBites: number;

    constructor(name:string,powerBites:number){
        super(name);
        this.powerBites=powerBites;
    }
    public toString() : string {
        return 'Dog:' + super.toString() +" "+ this.powerBites;
    }
}