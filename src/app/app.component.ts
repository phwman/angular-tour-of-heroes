import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: `
    <ht>{{title}}</ht>
    <h2>{{hero.name}}</h2>
    <div><label>id : </label>{{hero.id}}</div>
    <div>
      <label>이름 : </label>
      <input [(ngModel)]="hero.name" placeholder="이름"/>
    </div><div>test</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // title = "Tour of Heroes";

  // hero : Hero = {
  //   id : 1,
  //   name : "이순신"
  // }
}

// export class Hero {
//   id : NumberValueAccessor;``
//   name : string;
// }
