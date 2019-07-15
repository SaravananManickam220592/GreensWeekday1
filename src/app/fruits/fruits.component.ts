import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  imageUrl:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Xx8iw2KsZesPjVHU6xud4yLGv4bwUwUZTddCZWWfVt5KMPdQ';
  status:boolean = true;
  offer:boolean = false;
  bgColor:string = 'yellow';
  color:string = 'blue';
  fruits:string[]=[];
  fruitName:string='apple';

  addFruit(fruitEvent){
    if(fruitEvent.keyCode == 13){
      let value = fruitEvent.target.value;
      this.fruits.push(value);
      fruitEvent.target.value='';
      console.log(this.fruits);
    }
  }

  addFruitFromButton(fruit){
    var value = fruit.value;
    this.fruits.push(value);
    fruit.value='';
    console.log(this.fruits);   
  }

  constructor() { }

  ngOnInit() {
  }

}
