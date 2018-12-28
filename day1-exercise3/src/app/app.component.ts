import { Component } from '@angular/core';

interface Person {
  name: string,
  age: number,
  address: string,
  email: string,
  isGraduate: boolean
}

const p1:Person = {
  name : "A",
  age: 20,
  address: "Pune",
  email: "abc@gmail.com",
  isGraduate: true
}
const p2:Person = {
  name : "B",
  age: 24,
  address: "Pune",
  email: "xyz@gmail.com",
  isGraduate: true
}
const p3:Person = {
  name : "C",
  age: 11,
  address: "Pune",
  email: "kbc@gmail.com",
  isGraduate: false
}

const People = [p1, p2,p3];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'day1-exercise3';
  people = People;
  graduatedPeople = People.filter((p) => {return p.isGraduate});
}
