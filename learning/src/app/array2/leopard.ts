import { Patruped } from "./patruped";

export class Leopard extends Patruped{
    speed: number;

    constructor(name:string, speed:number){
        super(name);
        this.speed=speed;
    }
    public toString() : string {
        return 'Leopard:' + super.toString() +" "+ this.speed;
    }
}