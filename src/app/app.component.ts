// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.css']
//   // providers: [UserService]
// })
// export class AppComponent implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  welcome: string;
  games: any;
  changeText: boolean;
  color = '';
  constructor() {
    this.changeText = false;
    //   this.welcome = 'Display List using ngFor in Angular 2';

      // this.games = [{
      //     Name : 'Hue',
      //     Image: 'car.jpeg',
      //     Summary : 'August 23'
      // },
      // {
      //   Name : 'Hue',
      //   Image: 'car.jpeg',
      //   Summary : 'August 23'
      // },
      // {
      //   Name : 'Hue',
      //   Image: 'car.jpeg',
      //   Summary : 'August 23'
      // },
      // {
      //   Name : 'Hue',
      //   Image: 'car.jpeg',
      //   Summary : 'August 23'
      // }];
  }
  ngOnInit() {}
changeStyle($event) {
  this.color = $event.type === 'mouseover' ? 'yellow' : '';
}
}
