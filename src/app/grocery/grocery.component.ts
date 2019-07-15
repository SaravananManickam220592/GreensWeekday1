import { Component } from '@angular/core';

@Component({
    selector : 'grocery',
    templateUrl : './grocery.component.html',
    styleUrls : ['./grocery.component.css']
})
export class GroceryComponent{

    offerProduct:string  = "Fruits";
    price:number = 40;
    today =  new Date();
    a: number = 0.259;

    name:string="cadbuary";














    

    getOfferProduct(){
        return "Fruits";
    }


}