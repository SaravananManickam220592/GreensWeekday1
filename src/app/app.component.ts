import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Greens Technology';

  post:any = { likesCount : 89 , isLiked : true };

  likeEvent(likeData){
    console.log(likeData);
  }
}
