import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  addStatus:boolean = false;
  viewmode:string='XXX';
  status1:boolean =  true;
  status2:boolean =  true;
  bgColor= 'yellow';
  color='red';

  courses:any[] = [];

  constructor() { }

  ngOnInit() {
  }

  loadCourses(){
    var me = this;
    setTimeout(function(){
      me.courses =  [{
        id : 'AAD1',
        name : 'node js',
        price : 9000
      },
      {
        id : 'AAD2',
        name : 'React js',
        price : 7500
      },
      {
        id : 'AAD3',
        name : 'Angular js',
        price : 8500
      }];
    },1500);

  }

  courseTracker(item, index){
    item.id ? item.id:null;
  }
  

}
