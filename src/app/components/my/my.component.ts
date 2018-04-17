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
  roman: string;
  arabic: number;

  constructor() {
  }

  ngOnInit() {
    this.name = 'Hosam Almoghraby';
    this.email = 'i@hos.am';
    this.website = 'http://hos.am';
    this.age = 35;
    this.address = {
      street: 'Ludwig-Gruber-Weg 3',
      city: 'Wien',
      country: 'Austria'
    };
    this.hobbies = ['Coding', 'Swimming', 'Hiking'];
    this.arabic = 0;
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

  toArabic(roman): number {
    let romanArray: Array<string> = roman.split(""),
        numberKeys: object = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
        
    for (let i = romanArray.length-1; i >= 0; i--) {  
      if (numberKeys[romanArray[i+1]] <= numberKeys[romanArray[i]] || i == romanArray.length-1)
        this.arabic += numberKeys[romanArray[i]];
      else
        this.arabic -= numberKeys[romanArray[i]];
    }
    console.log(this.arabic);
    return this.arabic;
  }

  toRoman (arabic): string {
    let numberKeys: Array<any> = [['I', 1], ['IV', 4], ['V', 5], ['IX', 9], ['X', 10], ['XL', 40], ['L', 50], ['XC', 90], ['C', 100], ['CD', 400], ['D', 500], ['CM', 900], ['M', 1000]],
        roman: string = '',
        i: number = 12;

    while (this.arabic != 0) {
      if (this.arabic >= numberKeys[i][1]) {
        this.arabic -= numberKeys[i][1];
        this.roman += numberKeys[i][0];
      } else {
        i--;
      }
    }
    return this.roman;
  }
}

interface Address {
  street: string;
  city: string;
  country: string;
}