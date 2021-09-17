import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    age: 23
  };

  value = '';

  onEnter(value: string) {
    this.value = value;
  }

  res = 'no result';

  onEnter2(value: string) {
    let x = Number(value);
    x = x*x;
    this.res = "Patratul lui x este " + x.toString();
  }

  res3 = '';

  onEnter3(value: string) {
    let x = Number(value);
      if(x>=18){
        this.res3="This is major";
      }  
      else{
        this.res3="This is minnor";
      }
  }

  res4='';

  onEnter4(value: string) {
    let x= Number(value);
    let count=0;
    this.res4 ='';
    for(let d=1; d<=x; d++){
      if(x%d==0){
        this.res4 =this.res4 +" "+ d;
        count++;
      } 
    }
    if(count ==2){
      this.res4=this.res4 + " Numarul este prim";
    }
    else{
      this.res4=this.res4 +" Numarul nu este prim";
    }
    
  }



  constructor() { }

  ngOnInit() {
  }

}
