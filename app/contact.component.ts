import { Component } from '@angular/core';

//import { RECIPES } from './demo-data';

class Contact {
fullName: string;
email: string;
message: string;
}

@Component({
    selector: 'contact-form',
	templateUrl: './app/contact.component.html'  
})

export class ContactComponent {

model: Contact = new Contact();
submitted = false;
send() {
this.submitted = true;
}
}