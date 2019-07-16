import { Directive, HostListener, ElementRef } from '@angular/core';


@Directive({
    selector : '[debitcard]'
})
export class DebitCardDirective {

    constructor(private htmlRef:ElementRef){

    }

    @HostListener('keyup')
    cardNumberEntered(){
        var value = <string> this.htmlRef.nativeElement.value;
        var finalValue = '';

        if(value.length >4 && value.length < 8 ){
            finalValue = value.substr(0,4)+' - '+value.substr(4);
            this.htmlRef.nativeElement.value = finalValue;
        }else if(value.length >8 && value.length < 12){
            finalValue = value.substr(0,4)+' - '+value.substr(4,8)+' - '+value.substr(8);
            this.htmlRef.nativeElement.value = finalValue;
        }
    }

}