import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-instalike',
  templateUrl: './instalike.component.html',
  styleUrls: ['./instalike.component.css']
})
export class InstalikeComponent implements OnInit {

  @Input('isLiked') isLiked:boolean;
  @Input('likesCount') likesCount:number;
  @Output('likeEvent') likeEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  likeClicked(){
    this.isLiked = !this.isLiked;
    (this.isLiked) ? this.likesCount++ : this.likesCount--;
    this.likeEvent.emit({ isLiked :this.isLiked , likesCount :  this.likesCount});
  }

}
