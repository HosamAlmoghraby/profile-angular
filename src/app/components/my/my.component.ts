import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  romanArabic: string = '';
  // response: Array<Post>;
  isEdit: boolean = false;
  editButton: string = 'Edit User';

  constructor(/*private dataService: DataService*/) {
    console.log('Data service connected.... (my.component.ts)')
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
    // this.dataService.getPosts().subscribe((posts) => {
    //   this.response = posts;
    // });
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

  convert(): string | number {
    if (this.romanArabic.match(/^[0-9]+$/)) {
      return this.toRoman(parseInt(this.romanArabic));
    } else {
      return this.toArabic(this.romanArabic.toUpperCase());
    }
  }

  toArabic(value: string): number {
    let arabic = 0,
        romanArray: Array<string> = value.split(""),
        numberKeys: object = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
        
    for (let i = romanArray.length-1; i >= 0; i--) {  
      if (numberKeys[romanArray[i+1]] <= numberKeys[romanArray[i]] || i == romanArray.length-1)
        arabic += numberKeys[romanArray[i]];
      else
        arabic -= numberKeys[romanArray[i]];
    }
    return arabic;
  }

  toRoman(value: number): string {
    let numberKeys: Array<any> = [['I', 1], ['IV', 4], ['V', 5], ['IX', 9], ['X', 10], ['XL', 40], ['L', 50], ['XC', 90], ['C', 100], ['CD', 400], ['D', 500], ['CM', 900], ['M', 1000]],
        roman = '',
        i: number = 12;

    while (value != 0) {
      if (value >= numberKeys[i][1]) {
        value -= numberKeys[i][1];
        roman += numberKeys[i][0];
      } else {
        i--;
      }
    }
    return roman;
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
    this.isEdit ? this.editButton = 'Edit Done' : this.editButton = 'Edit User';
  }
}

interface Address {
  street: string;
  city: string;
  country: string;
}

// interface Post {
//   id: number,
//   title: string,
//   body: string,
//   userId: number
// }