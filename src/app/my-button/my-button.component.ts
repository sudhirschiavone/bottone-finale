import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent {
    @Input() disabilita: boolean = false;
    @Output() clickEvent: EventEmitter<any> = new EventEmitter();
    dis= false;
    onClickDisable() : void{
      this.clickEvent.emit("save");
      this.dis = this.disabilita;
    }
}
