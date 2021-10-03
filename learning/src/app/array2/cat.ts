import { Patruped } from "./patruped";

export class Cat extends Patruped{
    clawLength: number;

    constructor(name:string,clawLength:number){
        super(name);
        this.clawLength=clawLength;
    }
    public toString() : string {
        return 'Cat:' + super.toString() +" "+ this.clawLength;
    }
}