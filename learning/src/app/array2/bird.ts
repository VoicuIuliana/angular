import { Animal } from "./animal";

export class Bird extends Animal{
    flightSpeed: number;
    constructor(name:string, flightSpeed){
        super(name,2);
        this.flightSpeed=flightSpeed;
    }

    public toString() : string {
        return 'Bird:' + super.toString() +" "+ this.flightSpeed;
    }
}


