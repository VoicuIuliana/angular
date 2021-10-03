export abstract class Animal {
    name: string;
    nrFeets: number;

    constructor(name:string, nrFeets:number){
        this.name=name;
        this.nrFeets=nrFeets;
    }
    public toString() : string {
        return this.name +" "+ this.nrFeets;
    }
}
