import { Component, OnInit } from '@angular/core';
import { Bird } from './bird';
import { Cat } from './cat';
import { Dog } from './dog';
import { Leopard } from './leopard';

@Component({
  selector: 'app-array2',
  templateUrl: './array2.component.html',
  styleUrls: ['./array2.component.css']
})
export class Array2Component implements OnInit {

  a1 : number[] = [2,4,5,6,1,3,2];
  a2: number[] = [3,4,5,67];


  // dogs:Dog[] = [new Dog('tigri',20), new Dog('negrut',5), new Dog('ursi',10)]
  cats:Cat[] = [new Cat('kity',4), new Cat('kenzy',8), new Cat('matiza',10)]
  leopards:Leopard[] = [new Leopard('leo1',70),new Leopard('leo2',40), new Leopard('leo3',50)]
  birds:Bird[] = [new Bird('bird1',10), new Bird('bird2',20), new Bird ('bird3',30)]

  constructor() {

  }

  ngOnInit() {
  }

  arrayToString(array: any[]) : string {
    let str = '';
    for(let i=0; i<array.length; i++){
      str = str + " " + array[i];
    }
    return str;
  }

  multiply(array: number[], x: number) :number[]{
    let arrayCopy = this.copy(array);
   for(let i=0; i<arrayCopy.length; i++){
     arrayCopy[i] = arrayCopy[i]*x;
   }
    return arrayCopy;
  }

  copy(array: any[]) :any[]{
    let arrayCopy = [];
    for(let i=0; i<array.length; i++){
      arrayCopy.push(array[i]);
    }
    return arrayCopy;
  }

  devide( array:number[], x:number) :number[]{
    let arrayCopy = this.copy(array);
    for( let i=0; i<arrayCopy.length; i++){
      arrayCopy[i]=arrayCopy[i]/x;
    }
    return arrayCopy;
  }

  multiplyArrays(array1:number[], array2:number[]) :number[]{
    if(array1.length != array2.length){
      return null;
    }
    let array3 =[];
    for( let i=0; i<array1.length; i++){
      array3.push(array1[i]*array2[i]);
    }
    return array3;
  }
  
  pow(array:number[]) :number[]{
    return this.multiplyArrays(array, array);
  }
}
