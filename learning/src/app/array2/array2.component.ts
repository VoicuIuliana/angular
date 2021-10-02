import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array2',
  templateUrl: './array2.component.html',
  styleUrls: ['./array2.component.css']
})
export class Array2Component implements OnInit {

  a1 : number[] = [2,4,5,6,1,3,2];
  a2: number[] = [3,4,5,67]

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
