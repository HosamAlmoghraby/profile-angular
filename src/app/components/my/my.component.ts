import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  website: string;
  address: Address;
  hobbies: Array<string>;

  constructor() {
  }

  ngOnInit() {
    this.name = 'Hosam';
    this.email = 'i@hos.am';
    this.website = 'http://hos.am';
    this.age = 35;
    this.address = {
      street: 'Ludwig-Gruber-Weg 3',
      city: 'Wien',
      state: 'Wien State'
    };
    this.hobbies = ['Coding', 'Swimming', 'Hiking'];
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  deleteHobby(hobby){
    for (let  i = 0; i < this.hobbies.length; i++) {
      if (hobby == this.hobbies[i]) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}

interface Address {
  street: string;
  city: string;
  state: string
}