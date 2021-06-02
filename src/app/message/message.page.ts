import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  contSearch = "";
  contMessage = "";
  messages = [] ;
  constructor() { }

  sendMessage() {
    let contact = {
      search: this.contSearch,
      message: this.contMessage
    }
    this.messages.push(contact);
    this.clearField();
    console.log(this.messages);
  }
  clearField(){
    this.contSearch = "";
    this.contMessage = "";
  }
  ngOnInit() {
  }

}
